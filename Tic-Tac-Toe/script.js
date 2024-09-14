document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);
    let isGameOver = false;

    cells.forEach(cell => {
        cell.addEventListener('click', () => handleCellClick(cell));
    });

    resetButton.addEventListener('click', resetGame);

    function handleCellClick(cell) {
        const index = cell.getAttribute('data-index');
        if (board[index] || isGameOver) return;
        
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? '#ff6f61' : '#de6262';
        
        if (checkWin()) {
            message.textContent = `${currentPlayer} wins!`;
            isGameOver = true;
            return;
        }
        
        if (board.every(cell => cell)) {
            message.textContent = 'Draw!';
            isGameOver = true;
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function resetGame() {
        board.fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.color = '#000';
        });
        currentPlayer = 'X';
        isGameOver = false;
        message.textContent = '';
    }
});

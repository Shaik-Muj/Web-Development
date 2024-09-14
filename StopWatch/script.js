document.addEventListener("DOMContentLoaded", function() {
    let milliseconds = 0, seconds = 0, minutes = 0;
    let timer;
    let isRunning = false;

    const startPauseButton = document.getElementById('startPauseButton');
    const resetButton = document.getElementById('resetButton');
    const lapButton = document.getElementById('lapButton');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const millisecondsSpan = document.getElementById('milliseconds');
    const lapsList = document.getElementById('lapsList');

    startPauseButton.addEventListener('click', function() {
        if (isRunning) {
            clearInterval(timer);
            startPauseButton.textContent = 'Start';
            startPauseButton.classList.remove('pause');
            startPauseButton.classList.add('start');
        } else {
            timer = setInterval(updateTime, 10);
            startPauseButton.textContent = 'Pause';
            startPauseButton.classList.remove('start');
            startPauseButton.classList.add('pause');
        }
        isRunning = !isRunning;
    });

    resetButton.addEventListener('click', function() {
        clearInterval(timer);
        milliseconds = seconds = minutes = 0;
        updateDisplay();
        startPauseButton.textContent = 'Start';
        startPauseButton.classList.remove('pause');
        startPauseButton.classList.add('start');
        isRunning = false;
        lapsList.innerHTML = '';
    });

    lapButton.addEventListener('click', function() {
        if (isRunning) {
            const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
            const lapItem = document.createElement('li');
            lapItem.textContent = lapTime;
            lapsList.appendChild(lapItem);
        }
    });

    function updateTime() {
        milliseconds += 1;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        updateDisplay();
    }

    function updateDisplay() {
        minutesSpan.textContent = formatTime(minutes);
        secondsSpan.textContent = formatTime(seconds);
        millisecondsSpan.textContent = formatTime(milliseconds);
    }

    function formatTime(unit) {
        return unit < 10 ? '0' + unit : unit;
    }
});

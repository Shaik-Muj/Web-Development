document.addEventListener("DOMContentLoaded", function() {
            const navbar = document.getElementById("navbar");
            const menuToggle = document.getElementById("menu-toggle");
            const navList = document.getElementById("nav-list");

            window.addEventListener("scroll", function() {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });

            menuToggle.addEventListener("click", function() {
                menuToggle.classList.toggle("open");
                navList.classList.toggle("active");
            });
        });


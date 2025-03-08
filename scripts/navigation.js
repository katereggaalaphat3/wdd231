// navigation.js - Toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Show/hide the menu
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active"); // Hide menu
        }
    });
});

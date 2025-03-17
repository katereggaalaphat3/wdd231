document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("#menu-button");
    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open"); // Toggle menu open class

        // Change button icon when menu opens/closes
        if (nav.classList.contains("open")) {
            menuButton.innerHTML = "&#10006;"; // "X" icon
        } else {
            menuButton.innerHTML = "&#9776;"; // Hamburger icon
        }
    });
});

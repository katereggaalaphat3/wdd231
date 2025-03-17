document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#copyright-year").textContent = new Date().getFullYear();

    // Set the last modified date dynamically
    document.querySelector("#last-modified").textContent = document.lastModified;
});
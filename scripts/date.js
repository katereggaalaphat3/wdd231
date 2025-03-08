// Get the current year
const currentYear = new Date().getFullYear();
document.querySelector("footer p").innerHTML = `&copy; ${currentYear} Alaphat Mob Kateregga, Uganda`;

// Get the last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// course.js - Dynamically display and filter courses
const courses = [
    { name: "CSE 110", category: "CSE", completed: false },
    { name: "WDD 130", category: "WDD", completed: true },
    { name: "CSE 111", category: "CSE", completed: true },
    { name: "CSE 210", category: "CSE", completed: false },
    { name: "WDD 131", category: "WDD", completed: true },
    { name: "WDD 231", category: "WDD", completed: false }
];

function displayCourses(filter) {
    const courseList = document.querySelector(".courses");
    courseList.innerHTML = "";

    const filteredCourses = filter === "All" ? courses : courses.filter(c => c.category === filter);

    filteredCourses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course.name;
        li.style.backgroundColor = course.completed ? "#28a745" : "#dc3545"; // Green for completed, red for not
        courseList.appendChild(li);
    });
}

// Add event listeners for filter buttons
document.addEventListener("DOMContentLoaded", function() {
    displayCourses("All"); // Show all courses by default

    document.querySelector(".filters button:nth-child(1)").addEventListener("click", () => displayCourses("All"));
    document.querySelector(".filters button:nth-child(2)").addEventListener("click", () => displayCourses("CSE"));
    document.querySelector(".filters button:nth-child(3)").addEventListener("click", () => displayCourses("WDD"));
});

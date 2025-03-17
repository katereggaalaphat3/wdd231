document.addEventListener("DOMContentLoaded", async () => {
    const membersContainer = document.querySelector("#members-container");
    let membersData = [];

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            membersData = data.members;
            setDefaultView(); 
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members, viewType) {
        membersContainer.innerHTML = ""; // Clear previous content
        membersContainer.className = viewType  === "grid" ? "grid-view" : "list-view";

        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member-card");

            if (viewType === "grid") {
                memberElement.classList.add("grid-item");
                memberElement.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                `;

            } else {
                memberElement.classList.add("list-item");
                memberElement.innerHTML = `
                   <img src="images/${member.image}" alt="${member.name}">
                    <div class="list-info">
                        <h3>${member.name}</h3>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    </div>
                `;
            }

            membersContainer.appendChild(memberElement);
        });
    }

    function setDefaultView() {
        const isMobile = window.innerWidth < 768;
        displayMembers(membersData, isMobile ? "list" : "grid");
    }

    // Adjust view on window resize
    window.addEventListener("resize", setDefaultView);

    // Fetch data on page load
    await fetchMembers();
});
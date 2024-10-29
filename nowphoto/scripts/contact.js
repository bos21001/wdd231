import { createNavbar } from './modules/navbar.mjs';
import { createFooter } from './modules/footer.mjs';
import { createActionButtons } from './modules/actionButtons.mjs';

document.querySelector('header').prepend(createNavbar());
document.querySelector('footer').appendChild(createFooter());
document.body.appendChild(createActionButtons());

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById('text');

    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    });

    // Get holidays from local storage
    const holidays = JSON.parse(localStorage.getItem('holidays'));

    // If holidays are not in local storage, fetch them
    if (!holidays) {
        const year = new Date().getFullYear();
        getHolidays(year);
    } else {
        updateHolidayMessage(holidays);
    }

    const expandButton = document.querySelector("#places-ideas button");
    const placesContent = document.getElementById("places-ideas-content");
    const placesList = document.getElementById("places-ideas-content");
    const modal = document.getElementById("place-modal");
    const closeModal = document.querySelector(".close");
    const placeName = document.getElementById("place-name");
    const placePhoto = document.getElementById("place-photo");

    expandButton.addEventListener("click", () => {
        const isVisible = placesContent.style.display === "grid";
        placesContent.style.display = isVisible ? "none" : "grid";
        expandButton.textContent = isVisible ? "Click to expand!" : "Click to collapse!";
    });

    // Fetch places data from JSON
    fetch('scripts/places.json')
        .then(response => response.json())
        .then(data => {
            data.places.forEach(place => {
                const listItem = document.createElement("li");
                listItem.classList.add("place-idea");
                listItem.textContent = place.name;

                // Show modal with place details on click
                listItem.addEventListener("click", () => {
                    placeName.textContent = place.name;
                    placePhoto.src = place.photo;
                    placePhoto.alt = place.name;
                    placePhoto.width = place.width;
                    placePhoto.height = place.height;
                    modal.style.display = "block";
                });

                placesList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error loading places:", error));

    // Close modal when the "X" is clicked
    closeModal.onclick = () => {
        modal.style.display = "none";
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

async function getHolidays(year) {
    const url = `https://brasilapi.com.br/api/feriados/v1/${year}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const holidays = await response.json();

        updateHolidayMessage(holidays);

        // Save holidays in local storage
        localStorage.setItem('holidays', JSON.stringify(holidays));

        return holidays;

    } catch (error) {
        console.error("Error fetching holidays:", error);
    }
}

function updateHolidayMessage(holidays) {
    // get the today's date in the format "YYYY-MM-DD"
    const today = new Date().toISOString().split('T')[0];

    // if today is a holiday
    if (holidays.some(holiday => holiday.date === today)) {
        document.getElementById('holiday-message').innerText = '*Today is a holiday in Brazil! We may take longer to respond.';
    }
}

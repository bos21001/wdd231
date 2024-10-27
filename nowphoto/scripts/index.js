document.addEventListener("DOMContentLoaded", () => {
    const galleryCheckbox = document.getElementById('gallery-checkbox');

    const day_in_ms = 1000 * 60 * 60 * 24;
    const visit_count_message = {
        2: "Welcome back for the 2nd time!",
        3: "Welcome back for the 3rd time!"
    };

    galleryCheckbox.addEventListener('click', toggleGalleryVisibility);
    const visitCount = updateVisitCount(day_in_ms);
    displayVisitMessage(visitCount, visit_count_message);
    storeVisitDate();
});

function toggleGalleryVisibility() {
    const galleryText = document.getElementById('gallery-text');

    const isVisible = galleryText.style.display === 'none';
    galleryText.style.display = isVisible ? 'block' : 'none';
    if (isVisible) {
        setTimeout(() => (galleryText.style.display = 'block'), 1000);
    }
}

function getLastVisitDays(day_in_ms) {
    const lastVisit = new Date(localStorage.getItem('date'));
    const today = new Date();
    return (today - lastVisit) / day_in_ms;
}

function updateVisitCount(day_in_ms) {
    let count = parseInt(localStorage.getItem('count') || 0);
    if (getLastVisitDays(day_in_ms) >= 1) {
        count++;
        localStorage.setItem('count', count);
    }
    return count;
}

function displayVisitMessage(count, visit_count_message) {
    const heading = document.querySelector('h1');
    const message = visit_count_message[count] || `Welcome back for the ${count}th time!`;
    heading.innerHTML = count > 1 ? message : "I'm glad you're back!";
}

function storeVisitDate() {
    localStorage.setItem('date', new Date());
}
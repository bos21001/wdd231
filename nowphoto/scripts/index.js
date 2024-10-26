document.addEventListener("DOMContentLoaded", () => {
    const galleryCheckbox = document.getElementById('gallery-checkbox');
    const galleryText = document.getElementById('gallery-text');

    // Gallery Toggle
    galleryCheckbox.addEventListener('click', () => {
        const isVisible = galleryText.style.display === 'none';
        galleryText.style.display = isVisible ? 'block' : 'none';
        if (isVisible) setTimeout(() => {
            galleryText.style.display = 'block';
        }, 1000);
    });
});
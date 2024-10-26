document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById('text');

    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    });
});

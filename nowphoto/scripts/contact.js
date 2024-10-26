const textarea = document.getElementById('text');
textarea.addEventListener('input', autoResize);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
}

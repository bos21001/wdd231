// bfcache


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger");

    hamburger.addEventListener("click", () => handleHamburgerClick());

    setCurrentYear();
    setLastModified();
    setCurrentPageNav();
});

function setCurrentYear() {
    let currentYear = new Date().getFullYear();

    document.getElementById("currentYear").textContent = currentYear;
}

function setLastModified() {
    let lastModified = document.lastModified;

    document.getElementById("lastModified").textContent = lastModified;
}

function setCurrentPageNav() {
    let currentPage = document.URL;

    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        let href = link.getAttribute("href").replace(".html", "");

        // if the href attribute of the link matches the current page
        if (currentPage.includes(href)) {
            // add a class to the link to style it differently
            link.classList.add("active");
        }
    });
}

function handleHamburgerClick() {
    const nav = document.querySelector("#navigation");

    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    
    // Toggle the aria-expanded attribute
    hamburger.setAttribute("aria-expanded", !isExpanded);
    
    // Toggle aria-hidden for screen readers
    nav.setAttribute("aria-hidden", isExpanded);

    // Toggle navigation visibility by adding/removing class
    nav.classList.toggle("expanded");
    nav.classList.toggle("collapsed");

    // Toggle the hamburger icon
    hamburger.textContent = isExpanded ? "☰" : "✖";
}
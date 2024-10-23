document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger");

    hamburger.addEventListener("click", () => handleHamburgerClick());

    setCurrentYear();
    setLastModified();
    setCurrentPageNav();


    let lastVisit = localStorage.getItem("lastVisit");
    let currentDate = new Date();
    let daysBetween = 0;
    let message;

    if (lastVisit) {
        lastVisit = new Date(lastVisit);
        daysBetween = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    }

    if (daysBetween < 1) {
        message = "Back so soon! Awesome!";
    } else {
        message = `You last visited ${daysBetween} day${daysBetween === 1 ? "" : "s"} ago.`;
    }

    localStorage.setItem("lastVisit", currentDate);

    document.getElementById("welcome-message").textContent = message;
});

function setCurrentYear() {
    currentYear = new Date().getFullYear();

    document.getElementById("currentYear").textContent = currentYear;
}

function setLastModified() {
    lastModified = document.lastModified;

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

        if (currentPage.includes("#") && href === "#") {
            link.classList.remove("active");
        }
    });

    // if no link is active, set the first link to active
    if (!document.querySelector("nav a.active")) {
        navLinks[0].classList.add("active");
    }
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
    hamburger.textContent = isExpanded ? "✖" : "☰";
}
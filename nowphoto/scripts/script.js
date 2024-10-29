import { createNavbar } from './modules/navbar.mjs';
import { createFooter } from './modules/footer.mjs';
import { createActionButtons } from './modules/actionButtons.mjs';

document.querySelector('header').prepend(createNavbar());
document.querySelector('footer').appendChild(createFooter());
document.body.appendChild(createActionButtons());

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const openMenuButton = document.getElementById('open-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const menu = document.getElementById('menu');
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Menu Toggle
    const toggleMenu = (isOpen) => {
        openMenuButton.setAttribute('aria-expanded', isOpen);
        menu.classList.toggle('menu-visible', isOpen);
        menu.classList.toggle('menu-hidden', !isOpen);
        menu.setAttribute('aria-hidden', !isOpen);
        openMenuButton.style.display = isOpen ? 'none' : 'block';
        closeMenuButton.style.display = isOpen ? 'block' : 'none';
    };

    openMenuButton.addEventListener('click', () => toggleMenu(true));
    closeMenuButton.addEventListener('click', () => toggleMenu(false));

    // Navigation Scroll Hide/Show
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        if (menu.classList.contains('menu-visible') || window.innerWidth > 600) return;
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        nav.classList.toggle("nav-hidden", currentScroll > lastScrollTop);
        lastScrollTop = Math.max(0, currentScroll);
    });

    // Wayfinding: Highlight Active Page
    const currentPath = window.location.pathname.split("/").pop();
    let anyMatch = false;
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath.includes(currentPath) && currentPath !== "") {
            link.classList.add("active");
            anyMatch = true;
        }
    });

    // If no match, highlight Home
    if (!anyMatch) {
        navLinks[0].classList.add("active");
    }
});

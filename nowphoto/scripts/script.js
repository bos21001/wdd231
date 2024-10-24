document.addEventListener("DOMContentLoaded", function () {
    const openMenuButton = document.getElementById('open-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const menu = document.getElementById('menu');

    // Open menu event
    openMenuButton.addEventListener('click', function () {
        openMenuButton.setAttribute('aria-expanded', 'true');
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-visible');
        menu.setAttribute('aria-hidden', 'false');

        // Toggle button visibility
        openMenuButton.style.display = 'none';
        closeMenuButton.style.display = 'block';
    });

    // Close menu event
    closeMenuButton.addEventListener('click', function () {
        openMenuButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('menu-visible');
        menu.classList.add('menu-hidden');
        menu.setAttribute('aria-hidden', 'true');

        // Toggle button visibility
        openMenuButton.style.display = 'block';
        closeMenuButton.style.display = 'none';
    });

    let lastScrollTop = 0; // Store the last scroll position

    window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // if menu is open, do not hide it
        if (menu.classList.contains('menu-visible')) {
            return;
        }

        // if the screen is bigger than 600px, do not hide the nav
        if (window.innerWidth > 600) {
            return;
        }

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            nav.classList.add("nav-hidden");
        } else {
            // Scrolling up
            nav.classList.remove("nav-hidden");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
    });

    let galleryCheckbox = document.getElementById('gallery-checkbox');

    galleryCheckbox.addEventListener('click', function () {
        let galleryText = document.getElementById('gallery-text');
        let gallery = document.getElementById('gallery');
    //     display none
        if (galleryText.style.display === 'none') {
            // wait for the transition to end
            setTimeout(() => {
                galleryText.style.display = 'block';
                gallery.style.display = 'block';
            }, 1000);
        } else {
            galleryText.style.display = 'none';
            gallery.style.display = 'none';
        }
    });
});

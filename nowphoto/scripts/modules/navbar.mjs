export function createNavbar() {
    const nav = document.createElement("nav");

    // Logo Link
    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    const logoImage = document.createElement("img");
    logoImage.src = "images/logo-small.webp";
    logoImage.alt = "NOW Photo Logo";
    logoImage.width = 118;
    logoImage.height = 50;
    logoLink.appendChild(logoImage);
    nav.appendChild(logoLink);

    // Open Menu Button
    const openMenuButton = document.createElement("button");
    openMenuButton.id = "open-menu-button";
    openMenuButton.setAttribute("aria-label", "Menu");
    openMenuButton.setAttribute("aria-expanded", "false");
    openMenuButton.setAttribute("aria-controls", "menu");
    openMenuButton.textContent = "☰";
    nav.appendChild(openMenuButton);

    // Menu Container
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.setAttribute("aria-labelledby", "open-menu-button");
    menu.classList.add("menu-hidden");

    // Menu Items Container
    const menuItems = document.createElement("div");
    menuItems.id = "menu-items";

    // Menu Header
    const menuHeader = document.createElement("div");
    menuHeader.id = "menu-header";
    const headerLogoLink = logoLink.cloneNode(true);
    const closeMenuButton = document.createElement("button");
    closeMenuButton.id = "close-menu-button";
    closeMenuButton.setAttribute("aria-label", "Menu");
    closeMenuButton.setAttribute("aria-expanded", "false");
    closeMenuButton.setAttribute("aria-controls", "menu");
    closeMenuButton.textContent = "X";
    menuHeader.appendChild(headerLogoLink);
    menuHeader.appendChild(closeMenuButton);
    menuItems.appendChild(menuHeader);

    // Navigation Links
    const navList = document.createElement("ul");
    const navLinks = [
        {href: "index.html", text: "Home"},
        {href: "about.html", text: "About"},
        {href: "contact.html", text: "Contact"},
    ];
    navLinks.forEach(linkData => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = linkData.href;
        link.textContent = linkData.text;
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
    menuItems.appendChild(navList);

    // Social Links
    const socialLinks = document.createElement("div");
    socialLinks.id = "menu-social-links";

    const socialIcons = [
        {href: "https://www.whatsapp.com", src: "images/whatsapp.svg", alt: "WhatsApp"},
        {href: "https://www.instagram.com", src: "images/instagram.svg", alt: "Instagram"}
    ];

    socialIcons.forEach(iconData => {
        const iconLink = document.createElement("a");
        iconLink.href = iconData.href;
        iconLink.target = "_blank";
        iconLink.rel = "noopener noreferrer";
        const iconImage = document.createElement("img");
        iconImage.src = iconData.src;
        iconImage.alt = iconData.alt;
        iconImage.width = 30;
        iconImage.height = 30;
        iconImage.loading = "lazy";
        iconLink.appendChild(iconImage);
        socialLinks.appendChild(iconLink);
    });

    menuItems.appendChild(socialLinks);
    menu.appendChild(menuItems);
    nav.appendChild(menu);

    // Event listeners for toggling menu visibility
    openMenuButton.addEventListener("click", () => {
        menu.classList.toggle("menu-hidden");
        openMenuButton.setAttribute("aria-expanded", menu.classList.contains("menu-hidden") ? "false" : "true");
    });

    closeMenuButton.addEventListener("click", () => {
        menu.classList.add("menu-hidden");
        openMenuButton.setAttribute("aria-expanded", "false");
    });

    return nav;
}

export function createFooter() {
    const footer = document.createElement("div");

    // Copyright Text
    const copyright = document.createElement("p");
    copyright.textContent = "© 2024 NOW Photo - All Rights Reserved";
    footer.appendChild(copyright);

    // Links Data
    const linksData = [
        {
            href: "tel:123-456-7890",
            src: "images/telephone-white.svg",
            alt: "Phone Icon"
        },
        {
            href: "mailto:email@email.com",
            src: "images/envelope-white.svg",
            alt: "Email Icon"
        },
        {
            href: "https://www.whatsapp.com",
            src: "images/whatsapp-white.svg",
            alt: "WhatsApp Icon",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];

    // Create and append link icons
    linksData.forEach(linkData => {
        const link = document.createElement("a");
        link.href = linkData.href;
        if (linkData.target) link.target = linkData.target;
        if (linkData.rel) link.rel = linkData.rel;

        const icon = document.createElement("img");
        icon.src = linkData.src;
        icon.alt = linkData.alt;
        icon.loading = "lazy";
        icon.width = 30;
        icon.height = 30;
        icon.style.width = "30px";
        icon.style.height = "30px";

        link.appendChild(icon);
        footer.appendChild(link);
    });

    return footer;
}

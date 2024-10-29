export function createActionButtons() {
    const actionButtons = document.createElement("div");
    actionButtons.id = "action-buttons";

    // Links Data
    const buttonsData = [
        {
            href: "tel:123-456-7890",
            src: "images/telephone.svg",
            alt: "Phone Icon"
        },
        {
            href: "mailto:email@email.com",
            src: "images/envelope.svg",
            alt: "Email Icon"
        },
        {
            href: "https://www.whatsapp.com",
            src: "images/whatsapp.svg",
            alt: "WhatsApp Icon",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        {
            href: "#body",
            src: "images/arrow-up.svg",
            alt: "Up Arrow Icon"
        }
    ];

    // Create and append buttons
    buttonsData.forEach(buttonData => {
        const link = document.createElement("a");
        link.href = buttonData.href;
        if (buttonData.target) link.target = buttonData.target;
        if (buttonData.rel) link.rel = buttonData.rel;

        const icon = document.createElement("img");
        icon.src = buttonData.src;
        icon.alt = buttonData.alt;
        icon.loading = "lazy";
        icon.width = 30;
        icon.height = 30;
        icon.style.width = "30px";
        icon.style.height = "30px";

        link.appendChild(icon);
        actionButtons.appendChild(link);
    });

    return actionButtons;
}

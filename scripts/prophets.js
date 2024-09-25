const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

function getProphetOrderText(order) {
    let orderText = "";
    switch (order) {
        case 1:
            orderText = "1st Latter-day President";
            break;
        case 2:
            orderText = "2nd Latter-day President";
            break;
        case 3:
            orderText = "3rd Latter-day President";
            break;
        default:
            orderText = `${order}th Latter-day President`;
            break;
    }
    return orderText;
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        // Create Full Name element and set text content
        let fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create Birth Date element and set text content
        let birthDate = document.createElement("p");
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Create Birth Place element and set text content
        let birthPlace = document.createElement("p");
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Create Death Date element and set text content
        let deathDate = document.createElement("p");
        deathDate.textContent = `Date of Death: ${prophet.death || "Alive"}`;

        // Create Portrait element and set attributes
        let portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);

        // Set prophet order text content as 1st, 2nd, 3rd, 4th, etc.
        let prophetOrderText = getProphetOrderText(prophet.order);

        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophetOrderText}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "150");
        portrait.setAttribute("height", "200");

        // Create Card element and append Full Name and Portrait
        let card = document.createElement("section");
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Append Card to Cards
        cards.appendChild(card);
    });
};

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);

    const resetButton = document.querySelector("#reset");
    const bornInUtahButton = document.querySelector("#bornInUtah");
    const bornOutsideUSButton = document.querySelector("#bornOutsideUS");
    const lived95Button = document.querySelector("#lived95");
    const tenChildrenButton = document.querySelector("#tenChildren");
    const fifteenYearsButton = document.querySelector("#fifteenYears");

    resetButton.addEventListener("click", () => {
        cards.innerHTML = "";
        displayProphets(data.prophets);
    });

    bornInUtahButton.addEventListener("click", () => {
        cards.innerHTML = "";
        const prophetsBornInUtah = data.prophets.filter(prophet => prophet.birthplace.includes("Utah"));
        displayProphets(prophetsBornInUtah);
    });

    bornOutsideUSButton.addEventListener("click", () => {
        cards.innerHTML = "";
        const usaStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];	
        const prophetsBornOutsideUS = data.prophets.filter(prophet => !usaStates.some(state => prophet.birthplace.includes(state)));
        displayProphets(prophetsBornOutsideUS);
    });

    lived95Button.addEventListener("click", () => {
        cards.innerHTML = "";
        const prophetsLived95 = data.prophets.filter(prophet => {
            const birthYear = new Date(prophet.birthdate).getFullYear();

            if (prophet.death === null) {
                const date = new Date();
                return date.getFullYear() - birthYear >= 95;
            }

            const deathYear = new Date(prophet.death).getFullYear();

            return deathYear - birthYear >= 95;
        });
        displayProphets(prophetsLived95);
    });

    tenChildrenButton.addEventListener("click", () => {
        cards.innerHTML = "";
        const prophetsWithTenChildren = data.prophets.filter(prophet => prophet.numofchildren >= 10);
        displayProphets(prophetsWithTenChildren);
    });

    fifteenYearsButton.addEventListener("click", () => {
        cards.innerHTML = "";
        const servedAsProphetsWithFifteenYears = data.prophets.filter(prophet => prophet.length >= 15);
        displayProphets(servedAsProphetsWithFifteenYears);
    });
}

getProphetData();
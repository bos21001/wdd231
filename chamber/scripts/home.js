import {fetchMembers} from "./modules.mjs";

document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display members
    fetchMembers().then(members => {
        const randomCompanies = getRandomCompanies(members);
        renderCompanies(randomCompanies);
    });
});

// Get random companies from filtered members (levels 2 and 3)
function getRandomCompanies(members) {
    const companies = members.filter(member => member.level > 1 && member.level < 4);

    // Shuffle and select 3 random companies
    const randomCompanies = companies.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Shuffle the selected companies again
    return randomCompanies.sort(() => 0.5 - Math.random());
}

// Render the companies to the DOM
function renderCompanies(companies) {
    const companiesElement = document.querySelector("#companies");

    companies.forEach(company => {
        const companyElement = createCompanyElement(company);
        companiesElement.appendChild(companyElement);
    });
}

// Create the company element structure
function createCompanyElement(company) {
    const companyElement = document.createElement("div");
    companyElement.classList.add("company");

    const companyHeader = createCompanyHeader(company);
    companyElement.appendChild(companyHeader);

    const companyBody = createCompanyBody(company);
    companyElement.appendChild(companyBody);

    return companyElement;
}

// Create the company header section (name and other details)
function createCompanyHeader(company) {
    const companyHeader = document.createElement("div");
    companyHeader.classList.add("company-header");

    const h3 = document.createElement("h3");
    h3.textContent = company.name;
    companyHeader.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = company.other;
    companyHeader.appendChild(p);

    return companyHeader;
}

// Create the company body section (image and contact info)
function createCompanyBody(company) {
    const companyBody = document.createElement("div");
    companyBody.classList.add("company-body");

    const companyImage = createCompanyImage(company);
    companyBody.appendChild(companyImage);

    const companyInfo = createCompanyInfo(company);
    companyBody.appendChild(companyInfo);

    return companyBody;
}

// Create the company image element
function createCompanyImage(company) {
    const companyImage = document.createElement("div");
    companyImage.classList.add("company-image");

    const img = document.createElement("img");
    img.src = company.image;
    img.alt = company.name;
    img.loading = "lazy";
    img.height = 150;
    img.width = 150;
    companyImage.appendChild(img);

    return companyImage;
}

// Create the company info section (email, phone, website)
function createCompanyInfo(company) {
    const companyInfo = document.createElement("div");
    companyInfo.classList.add("company-info");

    const email = document.createElement("p");
    email.innerHTML = `<span class="bolder">EMAIL:</span> <a href="mailto:${company.email}">${company.email}</a>`;
    companyInfo.appendChild(email);

    const phone = document.createElement("p");
    phone.innerHTML = `<span class="bolder">PHONE:</span> ${company.phone}`;
    companyInfo.appendChild(phone);

    const website = document.createElement("p");
    website.innerHTML = `<span class="bolder">URL:</span> <a href="${company.website}" target="_blank" rel="noopener noreferrer">${company.website}</a>`;
    companyInfo.appendChild(website);

    return companyInfo;
}
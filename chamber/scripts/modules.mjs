export const fetchMembers = async () => {
    const response = await fetch("http://localhost:63342/wdd231/chamber/scripts/members.json");
    return await response.json();
};
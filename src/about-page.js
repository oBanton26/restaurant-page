export function aboutPageload() {
    const content = document.querySelector("#content");

    const aboutMessage = document.createElement("div");
    aboutMessage.textContent = "This is really just an exercice for building tabbed-browsing website. Don't think I would actually give you the address to this incredible restaurant !!!";
    content.appendChild(aboutMessage);
};
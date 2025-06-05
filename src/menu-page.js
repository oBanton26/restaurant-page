export function menuPageload () {
    const content = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Burger & Fries"
    content.appendChild(menuTitle);

    const menuDetail = document.createElement("div");
    menuDetail.textContent = "Burger, fries... that's it duh";
    content.appendChild(menuDetail);
};
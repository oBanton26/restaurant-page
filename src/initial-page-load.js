export function initialPageLoad () {
    const content = document.querySelector("#content");

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Il pizzaiolo di Cadoul";
    content.appendChild(restaurantName);

    const quotation = document.createElement("div");
    const quotationPhrase = document.createElement("span");
    quotationPhrase.textContent = "The best non-existing restaurant ever by Philip Andaifucku";
    quotation.appendChild(quotationPhrase);
    content.appendChild(quotation);

    const todaysSpecial = document.createElement("h3");
    todaysSpecial.textContent = "Today's special";
    content.appendChild(todaysSpecial);

    const todaysSpecialText = document.createElement("div");
    todaysSpecialText.textContent = "Nothing special today, still old hamburger fries";
    content.appendChild(todaysSpecialText);
};
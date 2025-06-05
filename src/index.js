import "./styles.css";
import { initialPageLoad } from "./initial-page-load.js";
import { menuPageload } from "./menu-page.js";
import { aboutPageload } from "./about-page.js";

initialPageLoad();

const content = document.querySelector("#content");

const homeButton = document.querySelector("#homeBtn");
homeButton.addEventListener("click", ()=>{
    content.textContent = "";
    initialPageLoad();
})

const menuButton = document.querySelector("#menuBtn");
menuButton.addEventListener("click", ()=>{
    content.textContent = "";
    menuPageload();
});

const aboutButton = document.querySelector("#aboutBtn");
aboutButton.addEventListener("click", ()=>{
    content.textContent = "";
    aboutPageload();
});
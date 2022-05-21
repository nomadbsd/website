// Modal Open Button
const navbarMenu = document.querySelector("#mobiledash");

// Modal Background
const modalBackground = document.querySelector(".modal-background-div");

// Page DOM
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");


navbarMenu.addEventListener("click", function() {
    modalBackground.style.visibility = "visible";
    modalBackground.style.opacity = "1";

    header.style.filter = "blur(2px)";
    nav.style.filter = "blur(2px)";
    main.style.filter = "blur(2px)";
    footer.style.filter = "blur(2px)";
});
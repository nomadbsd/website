// Modal Open Button
const navbarMenu = document.querySelector("#mobiledash");

// Modal Close Button
const closeModalButton = document.querySelector(".close-modal-span");

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

closeModalButton.addEventListener("click", function() {
    modalBackground.style.visibility = "hidden";
    modalBackground.style.opacity = "0";

    header.style.filter = "blur(0px)";
    nav.style.filter = "blur(0px)";
    main.style.filter = "blur(0px)";
    footer.style.filter = "blur(0px)";
});
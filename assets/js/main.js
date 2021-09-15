"use strict";

let hamburgerButton = document.getElementById("hamburger-button");
let valueI = hamburgerButton.querySelector("i");
let menuIsOpened = valueI.classList.contains("fa-bars");

hamburgerButton.addEventListener("click", hamburgerMenuToggle);

function hamburgerMenuToggle() {
    if (valueI.classList.contains("fa-bars")) {
        valueI.classList.remove("fa-bars");
        valueI.classList.add("fa-times");
    } else {
        valueI.classList.remove("fa-times");
        valueI.classList.add("fa-bars");
    }
}

function openHamburgerMenu(){

}

function closeHamburgerMenu() {

}

function showConventionalNavigation() {

}

function closeConventionalNavigation() {

}

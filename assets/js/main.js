"use strict";

let navigation = document.getElementById("nav");  // nav element
let navigationMenu = document.getElementById("navigation-menu");
let burger = document.getElementById("hamburger-button");

document.addEventListener("click", whereClicked);

function whereClicked(event) {
    let menuIsClosed = navigation.classList.contains("closed");
    let pageWidth = document.documentElement.scrollWidth;
    if (pageWidth > 700) {
        console.log("pageWidth", pageWidth, "выходим")
        showConventionalNavigation();
        return;
    }
    /*
        Мобильные варианты
     1. Страница загрузилась бургер виден меню нет
     2. Нажали на бургер, страница должна открыться
     3. Нажали на бургер Страница должна закрыться
        3.2 Нажали не только на боргер но и на сам документ Страница должна закрыться
    * */

    if (menuIsClosed && (event.target === burger || burger.innerHTML)) {
        console.log("menuisclosed - открываю")
        openHamburgerMenu();
    } else if(!menuIsClosed && (event.target === burger || burger.innerHTML)) {
        console.log("menu is open - закрываю")
        closeHamburgerMenu();
    }

    console.log("klik", event.target)
}

function openHamburgerMenu() {
    /*Вся навигация - nav*/
    navigation.classList.add("opened");
    navigation.classList.remove("closed");
    /*Только сама менюшка*/
    navigationMenu.classList.remove("invisible");
    navigationMenu.classList.add("visible");
}

function closeHamburgerMenu() {
    /*Вся навигация - nav*/
    navigation.classList.add("closed");
    navigation.classList.remove("opened");
    /*Только сама менюшка*/
    navigationMenu.classList.remove("visible");
    navigationMenu.classList.add("invisible");
}

function showConventionalNavigation() {
    /*not implement now*/
}

function closeConventionalNavigation() {
    /*not implement now*/
}

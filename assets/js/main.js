"use strict";
//       <button class="cross"><i class="fas fa-times  "></i></button>
let hamburgerButton = document.getElementById("hamburger-button");
console.log(hamburgerButton)

hamburgerButton.addEventListener("click", hamburgerMenuToggle);

function hamburgerMenuToggle() {
    let valueI = hamburgerButton.querySelector("i");
    let valueClassList = valueI.classList.contains
    if (valueI.classList.contains("fa-bars")) {
        valueI.classList.remove("fa-bars");
        valueI.classList.add("fa-times");
    } else {
        valueI.classList.remove("fa-times");
        valueI.classList.add("fa-bars");
    }
}

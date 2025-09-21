
import { cars } from "./data.js";
import { sahifaChanger, korishChanger } from "./ui-changer.js";
import { darkMode, closeKorish, korishModal, logo } from "./html-elements.js";
import "./add-car.js";


document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("theme");

    if (savedMode === "dark") {
        document.body.classList.add("dark");
        logo.src = "img/logo-dard.png";
    } else {
        document.body.classList.remove("dark");
        logo.src = "img/logo.png";
    }
});

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        logo.src = "img/logo-dard.png";
        localStorage.setItem("theme", "dark");
    } else {
        logo.src = "img/logo.png";
        localStorage.setItem("theme", "light");
    }
});

sahifaChanger(cars, korishChanger);

closeKorish.addEventListener("click", () => {
    korishModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === korishModal) {
        korishModal.style.display = "none";
    }
});

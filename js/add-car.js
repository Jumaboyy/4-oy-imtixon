import { addBtn, templateAddCar } from "./html-elements.js";
import { cars } from "./data.js";
import { sahifaChanger } from "./ui-changer.js";

addBtn.addEventListener("click", () => {
    // Template-ni klon qilish
    const clone = templateAddCar.content.cloneNode(true);

    // Modalni DOMga qo‘shish
    document.body.appendChild(clone);

    // Endi DOMda bo‘lgan modalni tanlaymiz
    const modal = document.querySelector(".modal-content:last-child");
    modal.style.display = "block";

    // Yopish tugmasi
    modal.querySelector(".closeAdd").onclick = () => {
        modal.style.display = "none";
        modal.remove(); // DOMdan olib tashlash
    };

    // Qo‘shish tugmasi
    modal.querySelector(".saveAdd").onclick = () => {
        const newCar = {
            name: modal.querySelector(".add-name").value,
            trim: modal.querySelector(".add-trim").value,
            generation: modal.querySelector(".add-generation").value,
            year: Number(modal.querySelector(".add-year").value),
            color: modal.querySelector(".add-color").value,
            colorName: modal.querySelector(".add-colorName").value,
            category: modal.querySelector(".add-category").value,
            doorCount: Number(modal.querySelector(".add-doorCount").value),
            seatCount: Number(modal.querySelector(".add-seatCount").value),
            maxSpeed: modal.querySelector(".add-maxSpeed").value,
            acceleration: modal.querySelector(".add-acceleration").value,
            engine: modal.querySelector(".add-engine").value,
            horsePower: Number(modal.querySelector(".add-horsePower").value),
            fuelType: modal.querySelector(".add-fuelType").value,
            fuelConsumption: {
                city: modal.querySelector(".add-city").value,
                highway: modal.querySelector(".add-highway").value,
                combined: modal.querySelector(".add-combined").value
            },
            country: modal.querySelector(".add-country").value,
            description: modal.querySelector(".add-description").value,
            id: cars.length + 1
        };

        cars.push(newCar);        
        sahifaChanger(cars);       
        modal.style.display = "none";
        modal.remove(); 
    };
});

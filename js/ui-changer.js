import { elSahifa, elTemplateSahifa, korishModal} from "./html-elements.js";
import { cars } from "./data.js"; 

export function sahifaChanger(cars,) {
    elSahifa.innerHTML = "";
    cars.forEach((car, index) => {
        const clone = elTemplateSahifa.content.cloneNode(true);

        const carName= clone.querySelector(".modelSahifa");
        const carYear = clone.querySelector(".yearSahifa");
        const carMaxSpeed = clone.querySelector(".maxSpeedSahifa");
        const carHorsePower = clone.querySelector(".horsepowerSahifa");
        const carCountry = clone.querySelector(".countrySahifa");


        carName.textContent = "Modeli: " + car.name;
        carYear.textContent = "Year: " + car.year;
        carMaxSpeed.textContent = "Max Speed: " + car.maxSpeed;
        carHorsePower.textContent = "Horse Power: " + car.horsepower;
        carCountry.textContent = "Country: " + car.country;

        const korishBtn = clone.querySelector(".korishBtn");
        korishBtn.addEventListener("click", () => {
            korishChanger(car);  
        });
        const tahrirlashBtn = clone.querySelector(".editBtn");
        tahrirlashBtn.addEventListener("click", () => {
            tahrirlashChanger(car);
        });

        const editBtn = clone.querySelector(".editBtn");
        editBtn.addEventListener("click", () => editChanger(car));


        const deleteBtn = clone.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
            cars.splice(index, 1); 
            sahifaChanger(cars); 
        });



        elSahifa.append(clone);
    });
}
export function korishChanger(car) {
    korishModal.style.display = "block";

    const carName = korishModal.querySelector(".korish-name");
    const carTrim = korishModal.querySelector(".korish-trim");
    const carGeneration = korishModal.querySelector(".korish-generation");
    const carYear = korishModal.querySelector(".korish-year");
    const colorEl = korishModal.querySelector(".korish-color");
    colorEl.style.backgroundColor = car.color; 
    const carColorName = korishModal.querySelector(".korish-colorName");
    const carCategory = korishModal.querySelector(".korish-category");
    const carDoorCount = korishModal.querySelector(".korish-doorCount");
    const carSeatCount = korishModal.querySelector(".korish-seatCount");
    const carMaxSpeed = korishModal.querySelector(".korish-maxSpeed");
    const carAcceleration =  korishModal.querySelector(".korish-acceleration");
    const carEngine = korishModal.querySelector(".korish-engine");
    const carHorsePower = korishModal.querySelector(".korish-horsePower");
    const carCity = korishModal.querySelector(".korish-city");
    const carHighway = korishModal.querySelector(".korish-highway");
    const carCombined = korishModal.querySelector(".korish-combined");
    const carCountry = korishModal.querySelector(".korish-country");
    const carDescription = korishModal.querySelector(".korish-description");


    carName.textContent = "Modeli: " + car.name;
    carTrim.textContent = "Trim: " + car.trim;
    carGeneration.textContent = "Generation: " + car.generation;
    carYear.textContent = "Year: " + car.year;
    carColorName.textContent =car.colorName;
    carCategory.textContent = "Category: " + car.category;
    carDoorCount.textContent = "DoorCount: " + car.doorCount;
    carSeatCount.textContent = "SeatCount: " + car.seatCount;
    carMaxSpeed.textContent = "MaxSpeed: " + car.maxSpeed;
    carAcceleration.textContent = "Acceleration: " + car.acceleration;
    carEngine.textContent = "Engine: " + car.engine;
    carHorsePower.textContent = "HorsePower: " + car.horsepower;
    carCity.textContent = "City: " + car.fuelConsumption.city;
    carHighway.textContent = "Highway: " + car.fuelConsumption.highway;
    carCombined.textContent = "Combined: " + car.fuelConsumption.combined;
    carCountry.textContent = "Country: " + car.country;
    carDescription.textContent = "Description: " + car.description;
}


export function tahrirlashChanger(car) {
  const modal = document.getElementById("tahrirlashModal");
  modal.style.display = "block";

  const carName = modal.querySelector(".tahrir-name");
  const carTrim = modal.querySelector(".tahrir-trim");
  const carGeneration = modal.querySelector(".tahrir-generation");
  const carYear = modal.querySelector(".tahrir-year");
  const carColor = modal.querySelector(".tahrir-color");
  const carColorName = modal.querySelector(".tahrir-colorName");
  const carCategory = modal.querySelector(".tahrir-category");
  const carDoorCount = modal.querySelector(".tahrir-doorCount");
  const carSeatCount = modal.querySelector(".tahrir-seatCount");
  const carMaxSpeed = modal.querySelector(".tahrir-maxSpeed");
  const carAcceleration = modal.querySelector(".tahrir-acceleration");
  const carEngine = modal.querySelector(".tahrir-engine");
  const carHorsePower = modal.querySelector(".tahrir-horsePower");
  const carCity = modal.querySelector(".tahrir-city");
  const carHighway = modal.querySelector(".tahrir-highway");
  const carCombined = modal.querySelector(".tahrir-combined");
  const carCountry = modal.querySelector(".tahrir-country");
  const carDescription = modal.querySelector(".tahrir-description");

  carName.value = car.name;
  carTrim.value = car.trim;
  carGeneration.value = car.generation;
  carYear.value = car.year;
  carColor.value = car.color;
  carColorName.value = car.colorName;
  carCategory.value = car.category;
  carDoorCount.value = car.doorCount;
  carSeatCount.value = car.seatCount;
  carMaxSpeed.value = car.maxSpeed;
  carAcceleration.value = car.acceleration;
  carEngine.value = car.engine;
  carHorsePower.value = car.horsepower;
  carCity.value = car.fuelConsumption.city;
  carHighway.value = car.fuelConsumption.highway;
  carCombined.value = car.fuelConsumption.combined;
  carCountry.value = car.country;
  carDescription.value = car.description;

  modal.querySelector(".saveTahrir").onclick = () => {
    car.name = carName.value;
    car.trim = carTrim.value;
    car.generation = carGeneration.value;
    car.year = Number(carYear.value);
    car.color = carColor.value;
    car.colorName = carColorName.value;
    car.category = carCategory.value;
    car.doorCount = Number(carDoorCount.value);
    car.seatCount = Number(carSeatCount.value);
    car.maxSpeed = carMaxSpeed.value;
    car.acceleration = carAcceleration.value;
    car.engine = carEngine.value;
    car.horsepower = Number(carHorsePower.value);
    car.fuelConsumption.city = carCity.value;
    car.fuelConsumption.highway = carHighway.value;
    car.fuelConsumption.combined = carCombined.value;
    car.country = carCountry.value;
    car.description = carDescription.value;

    modal.style.display = "none";
    sahifaChanger(cars);
  };

  modal.querySelector(".closeTahrir").onclick = () => {
    modal.style.display = "none";
  };
}








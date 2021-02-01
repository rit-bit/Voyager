const ironHeader = document.querySelector('#iron-header');
const fuelHeader = document.querySelector('#fuel-header');
const ironBtn = document.querySelector('#iron-btn');
const fuelBtn = document.querySelector('#fuel-btn');

let iron = 0;
let miners = 1;
let fuel = 0;
let fuelers = 0;

ironBtn.addEventListener("click", () => {
    if (iron >= 5) {
        iron -= 5;
        miners++;
    }
});

fuelBtn.addEventListener("click", () => {
    if (iron >= 15) {
        iron -= 15;
        fuelers++;
    }
});

window.setInterval(() => {
    ironHeader.innerHTML = `Iron: ${iron}`;
    fuelHeader.innerHTML = `Fuel: ${fuel}`;
}, 50);

window.setInterval(() => {
    iron += miners;
    fuel += fuelers;
}, 1000);
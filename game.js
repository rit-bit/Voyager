// IRON
const ironAmount = document.querySelector('#iron-amount');
const ironIncome = document.querySelector('#iron-income');
// FUEL
const fuelAmount = document.querySelector('#fuel-amount');
const fuelIncome = document.querySelector('#fuel-income');
// CHIPS
const chipsAmount = document.querySelector('#chips-amount');
const chipsIncome = document.querySelector('#chips-income');
// BUTTONS
const ironBtn = document.querySelector('#iron-btn');
const fuelBtn = document.querySelector('#fuel-btn');
const chipsBtn = document.querySelector('#chips-btn');

let iron = 0;
let miners = 1;
let fuel = 0;
let fuelers = 0;
let chips = 10;
let chipMakers = 0;

ironBtn.addEventListener("click", () => {
    if (iron >= 5) {
        if (chips >= 1) {
            iron -= 5;
            chips -= 1;
            miners++;
        }
    }
});

fuelBtn.addEventListener("click", () => {
    if (iron >= 15) {
        if (chips >= 3) {
            iron -= 15;
            chips -= 2;
            fuelers++;
        }
    }
});

chipsBtn.addEventListener("click", () => {
    if (iron >= 150) {
        iron -= 150;
        chipMakers++;
        chipsBtn.style.visibility = 'hidden';
    }
});

window.setInterval(() => {
    ironAmount.innerHTML = iron;
    fuelAmount.innerHTML = fuel;
    ironIncome.innerHTML = miners;
    fuelIncome.innerHTML = fuelers;
    chipsAmount.innerHTML = chips;
    chipsIncome.innerHTML = chipMakers;
}, 50);

window.setInterval(() => {
    iron += miners;
    fuel += fuelers;
    chips += chipMakers;
}, 1000);
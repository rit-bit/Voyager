const ironAmount = document.querySelector('#iron-amount');
const fuelAmount = document.querySelector('#fuel-amount');
const ironIncome = document.querySelector('#iron-income');
const fuelIncome = document.querySelector('#fuel-income');
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
    ironAmount.innerHTML = iron;
    fuelAmount.innerHTML = fuel;
    ironIncome.innerHTML = miners;
    fuelIncome.innerHTML = fuelers;
}, 50);

window.setInterval(() => {
    iron += miners;
    fuel += fuelers;
}, 1000);
"use strict";
const cardDay = document.querySelector('.cardDay > .numberTimw');
const cardHours = document.querySelector('.cardHours > .numberTimw');
const cardMinutes = document.querySelector('.cardMinutes > .numberTimw');
const cardsSecunds = document.querySelector('.cardsSecunds > .numberTimw');
const DateActual = new Date(2023, 7, 1);
const someDays = new Date(2023, 7, 15);
let constToTalDays = (someDays - DateActual) / 1000;
function cronomtro() {
    const Days = Math.floor(constToTalDays / 3600 / 24);
    const Hours = Math.floor(constToTalDays / 3600) % 24;
    const minutes = Math.floor(constToTalDays / 60) % 60;
    const seconds = Math.floor(constToTalDays) % 60;
    cardDay.textContent = timerStandard(Days);
    cardHours.textContent = timerStandard(Hours);
    cardMinutes.textContent = timerStandard(minutes);
    cardsSecunds.textContent = timerStandard(seconds);
    constToTalDays = constToTalDays - 1000 / 1000;
}
function timerStandard(timer) {
    return timer < 10 ? `0${timer}` : timer;
}
cronomtro();
setInterval(cronomtro, 1000);

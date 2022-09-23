'use strict';

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;
let score = [0,0];

// Switch active player
const switchActivePlayer = function() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
    activePlayer = activePlayer ? 0 : 1;
    document.querySelector(`.player--${activePlayer}`).classList.toggle("player--active");
}

// starting conditon
dice.classList.add("hidden");

// Rolling the dice
btnRoll.addEventListener("click", () => {
    // 1. Generate a random dice roll
    const roll = Math.trunc(Math.random() * 6) + 1;

    //2. Display the roll
    dice.classList.remove("hidden");
    dice.src = `dice-${roll}.png`;

    //3. Check for 1 roll
    if (roll != 1) {
        // Add dice to current score
        currentScore += roll;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        // Reset current score and switch active player
        switchActivePlayer();
    }
});

btnHold.addEventListener("click", () => {
    // 1. Add currentScore to active player score
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

    // 2. Reset currentScore and switch active player
    switchActivePlayer();
});

btnNew.addEventListener("click", () => {
    dice.classList.add("hidden");
    score = [0,0];
    currentScore = 0;

    document.querySelector("#score--0").textContent = 0;
    document.querySelector("#score--1").textContent = 0;
    document.querySelector("#current--0").textContent = 0;
    document.querySelector("#current--1").textContent = 0;

    if (activePlayer) {
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");
    }
});
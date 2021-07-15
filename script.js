'use strict';

// DOM objects

const newGame = document.querySelector('.btn--new');
const p1ScoreDOM = document.querySelector('#score--0');
const roll = document.querySelector('.btn--roll');

// Variables

let currentScore = 0;
const defaultScore = 0;
let p1Score = defaultScore;
let turn = 'p1';

// Event Listeners

roll.addEventListener('click', function () {
  const number = randomNumber();
  if (number > 1) {
    currentScore += number;
  }
  console.log(number, currentScore);
});

// Functions

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

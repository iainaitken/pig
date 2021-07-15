'use strict';

// Variables

const defaultScore = 0;
const newGame = document.querySelector('.btn--new');
let p1Score = defaultScore;
const p1ScoreDOM = document.querySelector('#score--0');
const roll = document.querySelector('.btn--roll');
let turn = 'p1';

// Event Listeners

roll.addEventListener('click', function () {
  const number = randomNumber();
  if (turn === 'p1') {
    p1Score += number;
  }
  console.log(p1Score);
});

// Functions

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

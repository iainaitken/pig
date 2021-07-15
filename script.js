'use strict';

// DOM objects

const newGame = document.querySelector('.btn--new');
const p1CurrentScore = document.querySelector('#current--0');
const p1ScoreDOM = document.querySelector('#score--0');
const roll = document.querySelector('.btn--roll');

// Variables

const defaultScore = 0;
let currentScore = defaultScore;
let p1Score = defaultScore;
let turn = 'p1';

// Event Listeners

roll.addEventListener('click', function () {
  const number = randomNumber();
  if (number > 1) {
    currentScore += number;
    p1CurrentScore.textContent = currentScore;
  } else {
    changePlayer();
    currentScore = defaultScore;
  }
  console.log(turn, number, currentScore);
});

// Functions

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

function changePlayer() {
  turn = turn === 'p1' ? 'p2' : 'p1';
}

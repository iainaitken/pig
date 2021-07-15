'use strict';

// DOM objects

const dice = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const p1CurrentScore = document.querySelector('#current--0');
const p2CurrentScore = document.querySelector('#current--1');
const p1ScoreDOM = document.querySelector('#score--0');
const p2ScoreDOM = document.querySelector('#score--1');
const roll = document.querySelector('.btn--roll');

// Variables

const defaultScore = 0;
let currentScore = defaultScore;
let p1Score = defaultScore;
let p2Score = defaultScore;
let turn = 'p1';

// Event Listeners

hold.addEventListener('click', function () {
  updateScore();
  endTurn();
});

roll.addEventListener('click', function () {
  const number = randomNumber();
  updateDice(number);
  if (number > 1) {
    updateCurrentScore(number);
  } else {
    endTurn();
  }
  console.log(turn, number, currentScore);
});

// Functions

function changePlayer() {
  turn = turn === 'p1' ? 'p2' : 'p1';
}

function endTurn() {
  resetCurrentScore();
  updateDOMCurrentScore();
  changePlayer();
}

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

function resetCurrentScore() {
  currentScore = defaultScore;
}

function updateCurrentScore(number) {
  currentScore += number;
  updateDOMCurrentScore();
}

function updateDice(number) {
  dice.src = `dice-${number}.png`;
}

function updateDOMCurrentScore() {
  if (turn === 'p1') {
    p1CurrentScore.textContent = currentScore;
  } else {
    p2CurrentScore.textContent = currentScore;
  }
}

function updateScore() {
  if (turn === 'p1') {
    p1Score += currentScore;
    p1ScoreDOM.textContent = p1Score;
  } else {
    p2Score += currentScore;
    p2ScoreDOM.textContent = p2Score;
  }
}

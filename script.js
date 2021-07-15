'use strict';

// DOM objects

const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const p1CurrentScore = document.querySelector('#current--0');
const p2CurrentScore = document.querySelector('#current--1');
const p1ScoreDOM = document.querySelector('#score--0');
const p2ScoreDOM = document.querySelector('#score--1');

// Variables

const defaultScore = 0;
let currentScore = defaultScore;
let p1Score = defaultScore;
let p2Score = defaultScore;
let turn = 'p1';

// Event Listeners

btnHold.addEventListener('click', function () {
  updateScore();
  endTurn();
});

btnNew.addEventListener('click', newGame);

btnRoll.addEventListener('click', function () {
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

function newGame() {
  resetScores();
  turn = 'p1';
}

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

function resetCurrentScore() {
  currentScore = defaultScore;
}

function resetDOMScores() {
  p1ScoreDOM.textContent = defaultScore;
  p2ScoreDOM.textContent = defaultScore;
}

function resetScores() {
  resetCurrentScore();
  p1Score = defaultScore;
  p2Score = defaultScore;
  updateDOMCurrentScore();
  resetDOMScores();
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

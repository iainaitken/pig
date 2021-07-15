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
const p1Section = document.querySelector('.player--0');
const p2Section = document.querySelector('.player--1');

// Variables

const defaultScore = 0;
let currentScore = defaultScore;
let gameOver = false;
let p1Score = defaultScore;
let p2Score = defaultScore;
let turn = 'p1';

// Event Listeners

btnHold.addEventListener('click', function () {
  if (!gameOver) {
    updateScore();
    checkWin();
    endTurn();
  }
});

btnNew.addEventListener('click', newGame);

btnRoll.addEventListener('click', function () {
  if (!gameOver) {
    const number = randomNumber();
    updateDice(number);
    if (number > 1) {
      updateCurrentScore(number);
    } else {
      endTurn();
    }
  }
});

// Functions

function changePlayer() {
  if (turn === 'p1') {
    turn = 'p2';
    switchBackgroundP2();
  } else {
    turn = 'p1';
    switchBackgroundP1();
  }
}

function checkWin() {
  if (p1Score > 9) {
    gameOver = true;
    p1Section.classList.remove('player--active');
    p1Section.classList.add('player--winner');
  } else if (p2Score > 9) {
    gameOver = true;
    p2Section.classList.remove('player--active');
    p2Section.classList.add('player--winner');
  }
}

function endTurn() {
  resetCurrentScore();
  updateDOMCurrentScore();
  if (!gameOver) {
    changePlayer();
  }
}

function newGame() {
  resetScores();
  resetBackground();
  gameOver = false;
  turn = 'p1';
  switchBackgroundP1();
}

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

function resetBackground() {
  if (turn === 'p1') {
    p1Section.classList.remove('player--winner');
    p1Section.classList.add('player--active');
  } else {
    p2Section.classList.remove('player--winner');
    p1Section.classList.add('player--active');
  }
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

function switchBackgroundP1() {
  p2Section.classList.remove('player--active');
  p1Section.classList.add('player--active');
}

function switchBackgroundP2() {
  p1Section.classList.remove('player--active');
  p2Section.classList.add('player--active');
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

'use strict';

// DOM objects

const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const p1CurrentScoreEl = document.getElementById('current--0');
const p2CurrentScoreEl = document.getElementById('current--1');
const p1ScoreEl = document.getElementById('score--0');
const p2ScoreEl = document.getElementById('score--1');
const p1SectionEl = document.querySelector('.player--0');
const p2SectionEl = document.querySelector('.player--1');

// Variables

const defaultScore = 0;
let currentScore = defaultScore;
let gameOver = false;
let p1Score = defaultScore;
let p2Score = defaultScore;
let turn = 'p1';

// Event Listeners

btnHoldEl.addEventListener('click', function () {
  if (!gameOver) {
    updateScore();
    checkWin();
    endTurn();
  }
});

btnNewEl.addEventListener('click', newGame);

btnRollEl.addEventListener('click', function () {
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
  if (p1Score > 99) {
    gameOver = true;
    diceEl.classList.add('hidden');
    p1SectionEl.classList.remove('player--active');
    p1SectionEl.classList.add('player--winner');
  } else if (p2Score > 99) {
    gameOver = true;
    diceEl.classList.add('hidden');
    p2SectionEl.classList.remove('player--active');
    p2SectionEl.classList.add('player--winner');
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
    p1SectionEl.classList.remove('player--winner');
    p1SectionEl.classList.add('player--active');
  } else {
    p2SectionEl.classList.remove('player--winner');
    p1SectionEl.classList.add('player--active');
  }
}

function resetCurrentScore() {
  currentScore = defaultScore;
}

function resetDOMScores() {
  p1ScoreEl.textContent = defaultScore;
  p2ScoreEl.textContent = defaultScore;
}

function resetScores() {
  resetCurrentScore();
  p1Score = defaultScore;
  p2Score = defaultScore;
  updateDOMCurrentScore();
  resetDOMScores();
}

function switchBackgroundP1() {
  p2SectionEl.classList.remove('player--active');
  p1SectionEl.classList.add('player--active');
}

function switchBackgroundP2() {
  p1Section.classList.remove('player--active');
  p2SectionEl.classList.add('player--active');
}

function updateCurrentScore(number) {
  currentScore += number;
  updateDOMCurrentScore();
}

function updateDice(number) {
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${number}.png`;
}

function updateDOMCurrentScore() {
  if (turn === 'p1') {
    p1CurrentScoreEl.textContent = currentScore;
  } else {
    p2CurrentScoreEl.textContent = currentScore;
  }
}

function updateScore() {
  if (turn === 'p1') {
    p1Score += currentScore;
    p1ScoreEl.textContent = p1Score;
  } else {
    p2Score += currentScore;
    p2ScoreEl.textContent = p2Score;
  }
}

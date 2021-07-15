'use strict';

const newGame = document.querySelector('.btn--new');
const p1Score = document.querySelector('#score--0');
const roll = document.querySelector('.btn--roll');

roll.addEventListener('click', randomNumber);

console.log(p1Score);

function randomNumber() {
  console.log(Math.ceil(Math.random() * 6));
}

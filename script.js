'use strict';

const newGame = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');

roll.addEventListener('click', function () {
  console.log(Math.ceil(Math.random() * 6));
});

console.log(roll);

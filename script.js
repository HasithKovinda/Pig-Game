'use strict';
// seleclting the elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentscore0El = document.querySelector('#current--0');
const currentscore1El = document.querySelector('#current--1');

score0El.textContent = 0;
score1El.textContent = 0;

let gameState = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

let currentscore = 0;
let activePlayer = 0;
let score = [0, 0];
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  let rollnumber = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rollnumber}.png`;
  if (gameState) {
    if (rollnumber !== 1) {
      // currentscore0El.textContent = currentscore += rollnumber;
      currentscore += rollnumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      // currentscore0El.textContent = 0;
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameState) {
    score[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      gameState = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

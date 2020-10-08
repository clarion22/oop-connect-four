import Game from './game.js';
const player1 = document.getElementById('player-1-name');
const player2 = document.getElementById('player-2-name');
let game = undefined;
const board = document.getElementById('board-holder');
const clickTarget = document.getElementById('click-targets');
const clickTargetColumns = document.querySelectorAll('click-target')

function updateUI() {
    if (!game) {
        board.classList.add('is-invisible');
    }
    board.classList.remove('is-invisible');
    document
        .getElementById('game-name')
      .innerHTML = game.getName();
  let currentPlayer = game.currentPlayer

  if (currentPlayer === 1) {
    clickTarget.innerHTML = "<div class='token black'></div>"
  } else {
    clickTarget.innerHTML = "<div class='token red'></div>"
  }



}
document.addEventListener('DOMContentLoaded', (event) => {

  let newGame = document.getElementById('new-game')

  if (!player1.value && !player2.value) {
    newGame.disabled = true;
  }

  player1.addEventListener('keyup', event => {
    if (player1.value && player2.value) {
      newGame.disabled = false;
    }
  })

  player2.addEventListener('keyup', event => {
    if (player1.value && player2.value) {
      newGame.disabled = false;
    }
  })

  newGame.addEventListener('click', event => {
    game = new Game(player1.value, player2.value);
    player1.value = '';
    player2.value = '';
    newGame.disabled = true;
    updateUI();
  })
  clickTarget.addEventListener('click', event => {
    game.playInColumn();
    updateUI();

  })
})

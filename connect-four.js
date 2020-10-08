import Game from './game.js';
const game = undefined;
document.addEventListener('DOMContentLoaded', (event) => {
  const player1 = document.getElementById('player-1-name');
  const player2 = document.getElementById('player-2-name');
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

  })
})

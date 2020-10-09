import Game from './game.js';
import Column from './column.js';

const player1 = document.getElementById('player-1-name');
const player2 = document.getElementById('player-2-name');
let game = undefined;
const board = document.getElementById('board-holder');
const clickTarget = document.getElementById('click-targets');
const clickTargetColumns = document.querySelectorAll('click-target');

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
    clickTarget.classList.add('black');
    clickTarget.classList.remove('red');
    // document.getElementById(event.target.id).innerHTML = "<div class='token black'></div>";
    // document.getElementById(event.target.id).innerHTML = "";
  } else {
      clickTarget.classList.add('red');
      clickTarget.classList.remove('black');
    // document.getElementById(event.target.id).innerHTML = "<div class='token red'></div>";
    // document.getElementById(event.target.id).innerHTML = "";
  }
  for (let row = 0; row < 6; row++) {
      for (let column = 0; column < 7; column++) {
          let square = document.getElementById(`square-${row}-${column}`);
          let result = game.getTokenAt(row, column);
         square.innerHTML = '';
         if (result === 1) {
             const token = document.createElement('div');
             token.classList.add('token');
             token.classList.add('black');
             square.appendChild(token);
         } else if (result === 2) {
            const token = document.createElement('div');
            token.classList.add('token');
            token.classList.add('red');
            square.appendChild(token);
         }

      }
      for (let i = 0; i <= 2; i++) {
       let column = document.getElementById(`column-${i}`);
      //  if (isColumnFull(i)) {
      //    column.classList.add('full');
      //  } else {
      //    column.classList.remove('full');
      //  }
      console.log(game.isColumnFull(i));
      }
  }
}


  //  console.log(game.columns[columnIdx]);

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
    if (!event.target.id.startsWith('column-')) {
        return;
    };
    let square = event.target.id;
    let columnIdx = Number.parseInt(square[square.length - 1]);
    // console.log(event.target.id);
    // console.log(column);

    game.playInColumn(columnIdx);
    updateUI();

  })
})

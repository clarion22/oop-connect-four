import Game from './game.js'

class Column {
  constructor() {
    this.tokens = [null, null, null, null, null, null];

  }

  add(currentPlayer) {
    for (let i = 5; i >= 0; i--) {
      if (this.tokens[i] === null) {
        // document.getElementById(`square-<row>-${this.columns[i]}`)
        //   .innerHTML = "<div class='black'></div > "
        this.tokens[i] = currentPlayer;
        break;
      }
    }
  }

  getTokenAt(rowNumber) {
    return this.tokens[rowNumber];
  }

  isFull() { //returns true if it's full
    return this.tokens.every(token => token !== null) //which is a conditional
  }

}

export default Column;

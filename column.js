import Game from './game.js'

class Column {
  constructor(){
    this.tokens = [null, null, null, null, null, null];

  }

  add(currentPlayer){
    for (let i = this.tokens.length - 1; i >= 0; i--) {
      if (this.tokens[i] === null) {
        // document.getElementById(`square-<row>-${this.columns[i]}`)
        //   .innerHTML = "<div class='black'></div > "
        this.tokens[i] === currentPlayer;
        return;
      }
    }
  }

  getTokenAt(rowNumber, colNumber=null){
    return this.tokens[rowNumber]
  }
}

export default Column;

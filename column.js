import Game from './game.js'

class Column {
  constructor(){
    this.columns = new Array(7)

  }

  add(currentPlayer){
    for (let i = this.columns.length - 1; i >= 0; i--){
      if (!this.columns[i] && currentPlayer === 1) {
        document.getElementById(`square-<row>-${this.columns[i]}`)
          .innerHTML = "<div class='black'></div > "
      }
    }
  }

  getTokenAt(){

  }
}

export default Column;

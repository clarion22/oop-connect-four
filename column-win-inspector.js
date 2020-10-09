import Column from './column.js';

export default class ColumnWinInspector {
  constructor(column, currentPlayer) {
      this.column = column;
      this.currentPlayer = currentPlayer;
  }

  inspect() {
    for (let i = 5; i >=0; i--) {
      let firstToken = this.column[i];
      let secondToken = this.column[i-1];
      let thirdToken = this.column[i-2];
      let fourthToken = this.column[i-3];
      if (this.currentPlayer === firstToken &&
        this.currentPlayer === secondToken &&
        this.currentPlayer === thirdToken &&
        this.currentPlayer === fourthToken) {

        return this.currentPlayer;
      }
      return 0;

    // console.log(this.currentPlayer);
  }
  }
}

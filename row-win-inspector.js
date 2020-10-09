export default class RowWinInspector{
  constructor(columns, currentplayer) {
    this.columns = columns; //should contain an array of 4 column objects
    this.currentplayer = currentplayer;
  }

  inspect() {
    for (let i = 0; i < 4; i++){
      let column1 = this.columns[i]
      let column2 = this.columns[i+1]
      let column3 = this.columns[i+2]
      let column4 = this.columns[i+3]
      console.log(column4);

      for (let j = 5; j >= 0; j--) {
        if (column1.tokens[j] === this.currentplayer &&
          column2.tokens[j] === this.currentplayer &&
          column3.tokens[j] === this.currentplayer &&
          column4.tokens[j] === this.currentplayer
          ) { return this.currentplayer }
          return 0;
      }
    }
  }
}

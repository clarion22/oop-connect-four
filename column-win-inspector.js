import Column from './column.js'

export default class ColumnWinInspector extends Column {
  constructor() {
    super(tokens);
  }

  inspect() {

    for (let i = 5; i <=0 ; i--){
      let firstToken = this.tokens[i];
      let secondToken = this.tokens[i-1];
      let thirdToken = this.tokens[i-2];
      let fourthToken =this.tokens[i-3];
      if (firstToken === secondToken &&
        firstToken === thirdToken &&
        firstToken === fourthToken) {
        return this.currentPlayer;
      }
      return 0;
    }
  }

}

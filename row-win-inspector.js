export default class RowWinInspector{
  constructor(columns) {
    this.columns = columns; //should contain an array of 4 column objects
  }

  inspect() {
    for (let j = 0; j < 6; j++) {
      const column1 = this.columns[0].getTokenAt(j);
      const column2 = this.columns[1].getTokenAt(j);
      const column3 = this.columns[2].getTokenAt(j);
      const column4 = this.columns[3].getTokenAt(j);
        if (column1 === column2 &&
          column2 === column3 &&
          column3 === column4 &&
          column1 !== null
        ) {
          return column1;
        }
      }
      return 0;
    }

}

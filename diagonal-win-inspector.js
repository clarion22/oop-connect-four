export default class DiagonalWinInpector {
    constructor(columns) {
        this.columns = columns;
    }
    inspect() {
        if (this.checkRight()) {
            return this.checkRight();
        } else if (this.checkLeft()) {
            return this.checkLeft();
        } else {
            return 0; 
        }

    }
    checkRight() {
        for (let j = 0; j < 6; j++) {
            const column1 = this.columns[0].getTokenAt(j);
            const column2 = this.columns[1].getTokenAt(j + 1);
            const column3 = this.columns[2].getTokenAt(j + 2);
            const column4 = this.columns[3].getTokenAt(j + 3);
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
    checkLeft() {
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

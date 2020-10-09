import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js"

class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [new Column(),
                        new Column(),
                        new Column(),
                        new Column(),
                        new Column(),
                        new Column(),
                        new Column()]



    }
    getName() {
        if (this.winnerNumber === 3) {
            return `${this.name1} ties with ${this.name2}`;
        } else if (this.winnerNumber === 1) {
            return `${this.name1} wins!`;
        } else if (this.winnerNumber === 2) {
            return `${this.name2} wins!`;
        }

        return `${this.name1} vs ${this.name2}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    playInColumn(columnIdx) {
        let column = this.columns[columnIdx]

        column.add(this.currentPlayer);
        this.checkForTie();
        if( this.winnerNumber === 0) {
            this.checkForColumnWin();
            this.checkForRowWin();
        }

        if(this.currentPlayer === 2) {
            this.currentPlayer = 1;
        } else if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else if (this.currentPlayer === 3) {
            this.winnerNumber = 3;
        }

    }

    isColumnFull(columnIdx) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[columnIdx].isFull();
        };

    checkForTie() {
        if (this.columns.every( column => column.isFull())) {
            this.currentPlayer = 3;
        };
    }
    checkForColumnWin() {
        this.columns.forEach( column => {
           let checkedColumn = new ColumnWinInspector(column.tokens, this.currentPlayer);
           let result = checkedColumn.inspect();
           if (result === 1 || result === 2) {
               this.winnerNumber = this.currentPlayer;
           }
        })
    }
    checkForRowWin() {
        let group1 = this.columns.slice(0, 3);
        let group2 = this.columns.slice(1, 4);
        let group3 = this.columns.slice(2, 5);
        let group4 = this.columns.slice(3, 6);
        let row1 = new RowWinInspector(group1, this.currentPlayer);
        let row2 = new RowWinInspector(group2, this.currentPlayer);
        let row3 = new RowWinInspector(group3, this.currentPlayer);
        let row4 = new RowWinInspector(group4, this.currentPlayer);
        let array = [row1, row2, row3, row4];
        for (let row = 0; row < array.length; row++) {
            let result = array[row].inspect();
            if (result > 0) {
                this.winnerNumber = result;
                break; 
            }
        }
    }
}
export default Game;

import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js";
import DiagonalWinInspector from './diagonal-win-inspector.js';

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
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();


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
        if (this.winnerNumber !== 0) return;
        let group1 = this.columns.slice(0, 4);
        let group2 = this.columns.slice(1, 5);
        let group3 = this.columns.slice(2, 6);
        let group4 = this.columns.slice(3);
        let row1 = new RowWinInspector(group1);
        let row2 = new RowWinInspector(group2);
        let row3 = new RowWinInspector(group3);
        let row4 = new RowWinInspector(group4);
        let array = [row1, row2, row3, row4];
        console.log(row1)
        for (let row = 0; row < array.length; row++) {
            let result = array[row].inspect();
            if (result ===1 || result === 2) {
                this.winnerNumber = result;
                break;
            }
        }
    }
    checkForDiagonalWin() {
        if (this.winnerNumber !== 0) return;
        let group1 = this.columns.slice(0, 4);
        let group2 = this.columns.slice(1, 5);
        let group3 = this.columns.slice(2, 6);
        let group4 = this.columns.slice(3);
        let row1 = new DiagonalWinInspector(group1);
        let row2 = new DiagonalWinInspector(group2);
        let row3 = new DiagonalWinInspector(group3);
        let row4 = new DiagonalWinInspector(group4);
        let array = [row1, row2, row3, row4];
        console.log(row1)
        for (let row = 0; row < array.length; row++) {
            let result = array[row].inspect();
            if (result ===1 || result === 2) {
                this.winnerNumber = result;
                break;
            }
        }
    }
}
export default Game;

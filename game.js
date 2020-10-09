import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";

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
}
export default Game;

import Column from "./column.js";

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
        if(this.currentPlayer === 2) {
            this.currentPlayer = 1;
        } else if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else if (this.currentPlayer === 3) {
            this.winnerNumber = 3;
        }

    }
    isColumnFull(columnIdx) {
        return this.columns[columnIdx].isFull();
        };

    checkForTie() {
        if (this.columns.every( column => column.isFull())) {
            this.currentPlayer = 3;
        };
    }
}
export default Game;

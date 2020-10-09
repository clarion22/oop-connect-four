import Column from "./column.js";

class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;
        this.columns = [new Column(),
                        new Column(),
                        new Column(),
                        new Column(),
                        new Column(),
                        new Column(),
                        new Column()]



    }
    getName() {
        return `${this.name1} vs ${this.name2}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    playInColumn(columnIdx) {
        let column = this.columns[columnIdx]

        column.add(this.currentPlayer);
        // column.getTokenAt(rowNumber, null)
        // console.log(this.columns);
        column.isFull();
        if(this.currentPlayer === 2) {
            this.currentPlayer = 1;
        } else {
            this.currentPlayer = 2;
        }
        console.log(this.currentPlayer);
    }
    isColumnFull(columnIdx) {
        return this.columns[columnIdx].isFull();
        };
}
export default Game;

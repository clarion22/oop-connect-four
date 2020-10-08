import Column from "./column.js";

class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;
        this.columns = [];

        for (let i = 0; i < 7; i++){
                this.columns.push(new Column())
        };

    }
    getName() {
        return `${this.name1} vs ${this.name2}`;
    }

    playInColumn(columnIdx) {
        let column = this.column[columnIdx]

        column.add(this.currentPlayer);
        column.getTokenAt(rowNumber, null)

        if(this.currentPlayer === 2) {
            this.currentPlayer = 1;
        } else {
            this.currentPlayer = 2;
        }
        console.log(this.currentPlayer);
    }
}
export default Game;

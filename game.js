class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;
    }
    getName() {
        return `${this.name1} vs ${this.name2}`;
    }

    playInColumn() {
        if(this.currentPlayer % 2) {
            this.currentPlayer = 1;
        } else {
            this.currentPlayer = 2; 
        }
    }
}
export default Game;

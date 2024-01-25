class Game {
    constructor() {
        this.round = 0;
        this.items = ["rock", "paper", "scissors"]; //points[0, 1, 2]
        this.points = [
            [0, 0, 1], // RR, RP, RS
            [1, 0, 0], // PR, PP, PS
            [0, 1, 0]  // SR, SP, SS
        ];
    }
    getRandomItem() {
        return Math.floor(Math.random() * this.items.length);
    }
    resetRound() {
        this.round = 0;
    }
}
export default Game;
//module.exports = Game;

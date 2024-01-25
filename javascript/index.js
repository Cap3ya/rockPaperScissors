import Player from './Player.js';
import Game from './Game.js';
import view from './view.js';
import controller from './controller.js';
function main() {
    let player1 = new Player;
    let player2 = new Player;
    let game = new Game;
    for (const item of controller.btnItems) {
        item.addEventListener('click', (event) => {
            // Get item from player
            player1.item = parseInt(event.target.value);
            player2.item = game.getRandomItem();
            // Display players item 
            view.player1.item.innerText = game.items[player1.item];
            view.player1.itemImg.style.backgroundImage = `url(../image/${game.items[player1.item]}.svg)`;
            view.player2.item.innerText = game.items[player2.item];
            view.player2.itemImg.style.backgroundImage = `url(../image/${game.items[player2.item]}.svg)`;
            // Set score based on combination's result
            const scoreP1 = game.points[player1.item][player2.item];
            const scoreP2 = game.points[player2.item][player1.item];
            player1.score += scoreP1;
            player2.score += scoreP2;
            // Display players score
            view.player1.score.innerText = player1.score.toString();
            view.player2.score.innerText = player2.score.toString();
            // Display the outcome of the game
            view.game.outcome.innerText = `${game.items[player1.item]} ${scoreP1 > scoreP2 ? "win" : scoreP1 < scoreP2 ? "lose" : "draw"} against ${game.items[player2.item]}`;
            // Increment round's value
            game.round += 1;
            // Display round 
            view.game.round.innerText = game.round.toString();
        });
    }
    ;
    controller.btnReset.addEventListener('click', () => {
        player1.resetScore();
        player2.resetScore();
        game.resetRound();
        for (const obj of Object.values(view)) {
            for (const element of Object.values(obj)) {
                element.innerText = "";
            }
        }
    });
}
main();

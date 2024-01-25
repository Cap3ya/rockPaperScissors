const Game = require('../javascript/Game.js');

//Game.round
test('New game has 0 round', () => {
    const game = new Game;
    expect(game.round).toBe(0);
})
test('Now game has 1 round 1', () => {
    const game = new Game; 
    game.round++;
    expect(game.round).toBe(1);
})
//Game.resetRound
test('Now game resetRound has 0 round', () => {
    const game = new Game; 
    game.round++;
    game.resetRound();
    expect(game.round).toBe(0);
})

// Test combinations
test('Rock beats Scissors', () => {
    const game = new Game; 
    expect(game.points[0][2]).toBe(1);
})
test('Paper beats Rock', () => {
    const game = new Game; 
    expect(game.points[1][0]).toBe(1);
})
test('Scissors beat Paper', () => {
    const game = new Game; 
    expect(game.points[2][1]).toBe(1);
})

//GetRandomItem
test('Random distribution btw 0 and 2', () => {
    const game = new Game; 
    let arr = []; let min = +Infinity, max = -Infinity;
    for (let i = 0; i < 100; i++) {
        const num = game.getRandomItem()
        num < min && (min = num);
        num > max && (max = num);
        arr.push(game.getRandomItem())
    }
    expect(min).toBe(0);
    expect(max).toBe(2);
})
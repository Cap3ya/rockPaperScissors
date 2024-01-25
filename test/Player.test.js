const Player = require('../javascript/Player.js');

test('New player has no item', () => {
    const player = new Player;
    expect(player.item).toBe(undefined);
})
test('New player has score 0', () => {
    const player = new Player;
    expect(player.score).toBe(0);
})

test('Now, player has a score of 10', () => {
    const player = new Player;
    player.score = 10;
    expect(player.score).toBe(10);
})

test('Now, player has a reset score of 0', () => {
    const player = new Player;
    player.score = 10;
    player.resetScore();
    expect(player.score).toBe(0);
})



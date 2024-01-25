const view = {
    player1: {
        item: document.getElementById('player1-item') as HTMLHeadingElement,
        itemImg: document.getElementById('player1-item-img') as HTMLDivElement,
        score: document.getElementById('player1-score') as HTMLSpanElement,
    },
    player2: {
        item: document.getElementById('player2-item') as HTMLHeadingElement,
        itemImg: document.getElementById('player2-item-img') as HTMLDivElement,
        score: document.getElementById('player2-score') as HTMLSpanElement,
    },
    game: {
        outcome: document.getElementById('game-outcome') as HTMLParagraphElement,
        round: document.getElementById('game-round') as HTMLSpanElement,
    }
}

export default view; 
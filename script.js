const game = (() => {
    board = [['','',''],['','',''],['','','']]
    return { board }
})();

const updateGameboard = (() => {
    // manipulate game logic
})();

const displayGameboard = (() => {
    const boardContainer = document.getElementById('gameboard');
    for ( row = 0 ; row < game.board.length ; row ++) {
        displayRow = document.createElement('div');
        displayRow.setAttribute('class', 'row');

        for ( cell = 0 ; cell < game.board[row].length ; cell ++ ) {
            displayCell = document.createElement('div');
            displayCell.setAttribute('class', 'cell');
            displayCell.textContent = game.board[row][cell];
            displayRow.appendChild(displayCell);
        }
        
        boardContainer.appendChild(displayRow);
    }
})();

const Player = (name, marker) => {
    return { name, marker }
}

const playerOne = Player('Mikhail', 'X');
const playerTwo = Player('Kelly', 'O');
displayGameboard
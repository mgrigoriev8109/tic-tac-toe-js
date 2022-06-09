const game = (() => {
    board = [['X','X','O'],['O','O','X'],['X','O','X']]
    return { board }
})();

const updateGameboard = (() => {
    // manipulate game logic
})();

const displayGameboard = (() => {
    const boardContainer = document.getElementById('gameboard');
    for ( row = 0 ; row < game.board.length ; row ++) {
        htmlRow = document.createElement('p');
        htmlRow.textContent = game.board[row];
        boardContainer.appendChild(htmlRow);
    }
})();

const Player = (name, marker) => {
    return { name, marker }
}

const playerOne = Player('Mikhail', 'X');
const playerTwo = Player('Kelly', 'O');
displayGameboard
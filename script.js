const gameboard = (() => {
    board = [['','',''],['','',''],['','','']]
    winning_combinations = [[1,2,3],[4,5,6],[7,8,9][1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
    return { board }
})();

const playGame = (() => {
    let winner = ""
    let current_player = playerOne
    const playerSelection = document.getElementByClass("cell");
    playerSelection.addEventListener("click", updateGameboard, false);
    // every turn check if player's selections include any of those combinations
    return { winner }
})();

const updateGameboard = (() => {
    // this module is responsible for manipulating the gameboard 
    // after an event listener for a cell div is clicked
})();

const displayGameboard = (() => {
    const boardContainer = document.getElementById('gameboard');

    for ( row = 0 ; row < gameboard.board.length ; row ++) {
        displayRow = document.createElement('div');
        displayRow.setAttribute('class', 'row');

        for ( cell = 0 ; cell < gameboard.board[row].length ; cell ++ ) {
            displayCell = document.createElement('div');
            displayCell.setAttribute('class', 'cell');
            displayCell.textContent = gameboard.board[row][cell];
            displayRow.appendChild(displayCell);
        }
        
        boardContainer.appendChild(displayRow);
    }
})();

const Player = (name, marker) => {
    return { name, marker }
}
// First, let's not worry about winning or player turns
// Let's create an event listener for each cell, which when clicked changes it to X

const playerOne = Player('Mikhail', 'X');
const playerTwo = Player('Kelly', 'O');
displayGameboard
playGame
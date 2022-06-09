const gameboard = (() => {
    board = [['X','X','O'],['O','O','X'],['X','O','X']]
    return { board }
})();

const updateGameboard = (() => {
    // manipulate game logic
})();

const displayGameboard = (() => {
    const boardContainer = document.getElementById('gameboard');
})();

const Player = (name, marker) => {
    return { name, marker }
}

const playerOne = Player('Mikhail', 'X');
const playerTwo = Player('Kelly', 'O');
console.log(gameboard.board);
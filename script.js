const gameboard = (() => {
    board: [['X','X','O']['O','O','X']['X','O','X']]
})();

const updateGameboard = (() => {
    // manipulate game logic
})();

const displayGameboard = (() => {
    // manipulate html display

})();

const Player = (name, marker) => {
    return { name, marker }
}

const playerOne = Player('Mikhail', 'X');
const playerTwo = Player('Kelly', 'O');
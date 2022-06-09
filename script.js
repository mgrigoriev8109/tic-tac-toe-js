const Gameboard = {
    board: [['X','X','O']['O','O','X']['X','O','X']],
    updateDisplay: function() {
        // manipulate html display
    }
}

const Player = (name, marker) => {
    const playTurn = () => {
        // manipulate game logic
    }
    return { name, marker }
}

const playerOne = Player('Mikhail', 'X');
const playerTwo = Player('Kelly', 'O');
const Gameboard = {
    board: [['X','X','O']['O','O','X']['X','O','X']]
}

const playTurn = {
    updateGameboard: function() {
        // manipulate game logic
    }
}

const displayTurn = {
    updateDisplay: function() {
        // manipulate html display
    }
}

const playerFactory = (name, marker) => {
    return { name, marker }
}

const playerOne = playerFactory('Mikhail', 'X');
const playerTwo = playerFactory('Kelly', 'O');
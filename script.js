const gameboard = (() => {
    board = [['O','O','O'],['O','O','O'],['O','O','O']]
    winning_combinations = [[1,2,3],[4,5,6],[7,8,9][1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
    return { board }
})();

const Player = (name, marker) => {
    return { name, marker }
};

function clearGameboard() {
    let boardContainer = document.getElementById('gameboard');
    while (boardContainer.firstChild) {
        boardContainer.removeChild(boardContainer.firstChild);
    }
}

function addEventListeners() {
    let allCells = document.getElementsByClassName('cell');
    for (var i = 0 ; i < allCells.length; i++) {
        allCells[i].addEventListener("click", function (e) {
            let array = this.id.split(" ")
            let row = parseInt(array[0])
            let cell = parseInt(array[1])
            gameboard.board[row][cell] = "X"
            clearGameboard()
            displayGameboard()
        })
    }
}

function displayGameboard() {
    let boardContainer = document.getElementById('gameboard');

    let cellIndex = 0
    for ( row = 0 ; row < gameboard.board.length ; row ++) {
        displayRow = document.createElement('div');
        displayRow.setAttribute('class', 'row');

        for ( cell = 0 ; cell < gameboard.board[row].length ; cell ++ ) {
            displayCell = document.createElement('div');
            displayCell.setAttribute('class', 'cell');
            displayCell.setAttribute('id', `${row} ${cell}`);
            displayCell.textContent = gameboard.board[row][cell];
            displayRow.appendChild(displayCell);
            cellIndex += 1
        }
        
        boardContainer.appendChild(displayRow);
    }
    addEventListeners()
};

const playGame = (() => {
    let winner = ""
    let playerOne = Player('Mikhail', 'X');
    let playerTwo = Player('Kelly', 'O');

    displayGameboard()
    // every turn check if player's selections include any of those combinations
    return { winner }
})();

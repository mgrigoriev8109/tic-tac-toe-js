const gameboard = (() => {
    board = [['','',''],['','',''],['','','']]
    winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
    return { board, winningCombinations }
})();

function displayGameboard() {
    let boardContainer = document.getElementById('gameboard');

    for ( row = 0 ; row < gameboard.board.length ; row ++) {
        displayRow = document.createElement('div');
        displayRow.setAttribute('class', 'row');
        displayCells(row)
        boardContainer.appendChild(displayRow);
    }
};

function displayCells(row) {
    for ( cell = 0 ; cell < gameboard.board[row].length ; cell ++ ) {
        displayCell = document.createElement('div');
        displayCell.setAttribute('class', 'cell');
        displayCell.setAttribute('id', `${row} ${cell}`);
        displayCell.textContent = gameboard.board[row][cell];
        displayRow.appendChild(displayCell);
    }
}

function addEventListeners(marker) {
    let allCells = document.getElementsByClassName('cell');
    for (var i = 0 ; i < allCells.length; i++) {
        allCells[i].addEventListener("click", function (e) {
            let array = this.id.split(" ")
            let row = parseInt(array[0])
            let cell = parseInt(array[1])
            let results = document.getElementById('results');
            if (gameboard.board[row][cell] !== "") {
                playTurn(marker)
                results.textContent = "That marker is already taken"
            }
            else {
                gameboard.board[row][cell] = marker
                playTurn(nextPlayer(marker))
                results.textContent = ""
            }
        })
    }
}

function nextPlayer(marker) {
    let nextMarker = ""
    if (marker == "X"){
        nextMarker = "O"
    } 
    else {
        nextMarker = "X"
    }
    return nextMarker
}

function playTurn(marker) {
    clearGameboard()
    displayGameboard()
    addEventListeners(marker)
    if (winnerPresent(marker) == true) {
        clearGameboard()
        displayGameboard()
        // display the winner name in results div
    }
}

function clearGameboard() {
    let boardContainer = document.getElementById('gameboard');
    while (boardContainer.firstChild) {
        boardContainer.removeChild(boardContainer.firstChild);
    }
}

function winnerPresent(marker) {
        // winnerPresent = false
        // flatten the gameboard
        // find the indixes of of the values equalling the marker
        // assign it to playerSelections array
    for (combination in gameboard.winningCombinations) {
        // see if that array of playerSelections matches a combination
        // if it does set winnerPresent = true
    }
        // return winnerPresent
}

const Player = (name, marker) => {
    return { name, marker }
};

const playGame = (() => {
    let playerOne = Player('Mikhail', 'X');
    let playerTwo = Player('Kelly', 'O');
    displayGameboard()
    addEventListeners(playerOne.marker)
})();

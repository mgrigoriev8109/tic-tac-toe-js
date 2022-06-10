const gameboard = (() => {
    board = [['','',''],['','',''],['','','']]
    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
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
    let previousPlayer = nextPlayer(marker)
    if (winnerPresent(previousPlayer)) {
        endGame(previousPlayer)
    }
    else {
        clearGameboard()
        displayGameboard()
        addEventListeners(marker)
        results.textContent = ""
    }
}

function winnerPresent(marker) {
    let winnerPresent = false
    let playerSelections = []
    gameboard.board.flat().filter((cell, index)  => {
        if (cell == marker){
            playerSelections.push(index)
        }
    })
    return compareSelections(playerSelections, marker)
}

function compareSelections(playerSelections, marker) {
    let winnerPresent = false
    for (let i = 0; i < gameboard.winningCombinations.length; i++) {
        combination = gameboard.winningCombinations[i]
        
        winnerPresent = combination.every(element => {
            return playerSelections.includes(element);
          });
        if (winnerPresent == true) { 
            console.log("winner")
            break; }
    }
    return winnerPresent
}

function endGame(marker) {
    clearGameboard()
    displayGameboard()
    results.textContent = `The winner is player ${marker}`
}

function clearGameboard() {
    let boardContainer = document.getElementById('gameboard');
    while (boardContainer.firstChild) {
        boardContainer.removeChild(boardContainer.firstChild);
    }
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

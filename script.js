const game = (() => {
    board = [['','',''],['','',''],['','','']]

    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    const nextTurn = (marker) => {
        let allCells = document.getElementsByClassName('cell');
        for (var i = 0 ; i < allCells.length; i++) {
            allCells[i].addEventListener("click", function (e) {
                let array = this.id.split(" ")
                let row = parseInt(array[0])
                let cell = parseInt(array[1])
                let results = document.getElementById('results');
                if (game.board[row][cell] !== "") {
                    assessResults(marker)
                    results.textContent = "That marker is already taken"
                }
                else {
                    game.board[row][cell] = marker
                    assessResults(nextPlayer(marker))
                }
            })
        }
    }

    return {
        nextTurn, 
        board,
        winningCombinations,
     }
})();

const displayGameboard = (() => {
    const update = () => {
        let boardContainer = document.getElementById('gameboard');

        for ( row = 0 ; row < game.board.length ; row ++) {
            displayRow = document.createElement('div');
            displayRow.setAttribute('class', 'row');
            displayCells(row)
            boardContainer.appendChild(displayRow);
        }
    }
    const displayCells = () => {
        for ( cell = 0 ; cell < game.board[row].length ; cell ++ ) {
            displayCell = document.createElement('div');
            displayCell.setAttribute('class', 'cell');
            displayCell.setAttribute('id', `${row} ${cell}`);
            displayCell.textContent = game.board[row][cell];
            displayRow.appendChild(displayCell);
        }
    }
    return {
        update
    }
})();

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

function assessResults(marker) {
    let previousPlayer = nextPlayer(marker)
    if (winnerPresent(previousPlayer)) {
        endGame(previousPlayer)
    }
    else if (game.board.flat().join("").length == 9) {
        results.textContent = 'This game is a tie!'
        clearGameboard()
        displayGameboard.update()
    }
    else {
        clearGameboard()
        displayGameboard.update()
        game.nextTurn(marker)
        results.textContent = ""
    }
}

function winnerPresent(marker) {
    let winnerPresent = false
    let playerSelections = []
    game.board.flat().filter((cell, index)  => {
        if (cell == marker){
            playerSelections.push(index)
        }
    })
    return compareSelections(playerSelections, marker)
}

function compareSelections(playerSelections, marker) {
    let winnerPresent = false
    for (let i = 0; i < game.winningCombinations.length; i++) {
        combination = game.winningCombinations[i]
        
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
    displayGameboard.update()
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
    displayGameboard.update()
    game.nextTurn(playerOne.marker)
})();

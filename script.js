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
                if (board[row][cell] !== "") {
                    assessResults(marker)
                    results.textContent = "That marker is already taken"
                }
                else {
                    board[row][cell] = marker
                    assessResults(nextPlayer(marker))
                }
            })
        }
    }

    const nextPlayer = (marker) => {
        let nextMarker = ""
        if (marker == "X"){
            nextMarker = "O"
        } 
        else {
            nextMarker = "X"
        }
        return nextMarker
    }

    const assessResults = (marker) => {
        let previousPlayer = nextPlayer(marker)
        if (winnerPresent(previousPlayer)) {
            display.endGameMessage(previousPlayer)
        }
        else if (board.flat().join("").length == 9) {
            results.textContent = 'This game is a tie!'
            display.clearGameboard()
            display.update()
        }
        else {
            display.clearGameboard()
            display.update()
            nextTurn(marker)
            results.textContent = ""
        }
    }

    const winnerPresent = (marker) => {
        let playerSelections = []
        board.flat().filter((cell, index)  => {
            if (cell == marker){
                playerSelections.push(index)
            }
        })
        return compareSelections(playerSelections, marker)
    }
    
    const compareSelections = (playerSelections) => {
        let winnerPresent = false
        for (let i = 0; i < winningCombinations.length; i++) {
            combination = winningCombinations[i]
            
            winnerPresent = combination.every(element => {
                return playerSelections.includes(element);
              });
            if (winnerPresent == true) { 
                console.log("winner")
                break; }
        }
        return winnerPresent
    }
    
    return {
        nextTurn,
        board
     }
})();

const display = (() => {
    const update = () => {
        let boardContainer = document.getElementById('gameboard');

        for ( row = 0 ; row < game.board.length ; row ++) {
            displayRow = document.createElement('div');
            displayRow.setAttribute('class', 'row');
            updateCells(row)
            boardContainer.appendChild(displayRow);
        }
    }
    const updateCells = () => {
        for ( cell = 0 ; cell < game.board[row].length ; cell ++ ) {
            displayCell = document.createElement('div');
            displayCell.setAttribute('class', 'cell');
            displayCell.setAttribute('id', `${row} ${cell}`);
            displayCell.textContent = game.board[row][cell];
            displayRow.appendChild(displayCell);
        }
    }

    const endGameMessage = (marker) => {
        clearGameboard()
        display.update()
        results.textContent = `The winner is player ${marker}`
    }
    
    const clearGameboard = () => {
        let boardContainer = document.getElementById('gameboard');
        while (boardContainer.firstChild) {
            boardContainer.removeChild(boardContainer.firstChild);
        }
    }
    
    return {
        update,
        endGameMessage,
        clearGameboard
    }
})();

const Player = (marker) => {
    return { marker }
};

const playGame = (() => {
    let playerOne = Player('X');
    display.update()
    game.nextTurn(playerOne.marker)
})();

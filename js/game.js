//iniciar variaveis

let board = ['', '', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

function handleMove(position) {

    if (gameOver) {
        return
    }

    if (gameOver == false) {

        if (board[position] == '') {
            board[position] = symbols[playerTime];

            gameOver = isWin();


            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }

    return gameOver;
}

function isWin() {

    let winStates = [
        
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ]

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            return true;
        }

    }

    return false;
}
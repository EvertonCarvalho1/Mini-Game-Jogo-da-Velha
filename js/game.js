//iniciar variaveis

let board = ['', '', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

function handleMove(position) {

    if (gameOver){
        return
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];
 

        if (playerTime == 0) {
            playerTime = 1;
        } else {
            playerTime = 0;
        }
    }
}
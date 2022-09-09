

var board = generateStandardBoard();

let level1 = [
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 0, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 22, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 28, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 30, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 31, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 32, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 35, },
    { blocktype: 'key', solid: false, interactive: false, row: 16, column: 20, },
    { blocktype: 'door', solid: false, interactive: true, row: 17, column: 37, },
    { blocktype: 'door', solid: false, interactive: true, row: 16, column: 37, },
];
let level2 = [
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 3, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 5, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 6, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 5, },
    //ich weiß nicht ob key interactive false richtig ist.
    { blocktype: 'key', solid: false, interactive: true, row: 10, column: 5, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 7, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 12, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 13, }, 
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 18, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 24, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 25, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 25, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 26, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 26, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 30, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 31, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 32, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 35, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 36, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 35, },
    { blocktype: 'door', solid: false, interactive: true, row: 9, column: 37, },
    { blocktype: 'door', solid: false, interactive: true, row: 8, column: 37, },

];

let level4 = [
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 2, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 4, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 6, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 7, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 8, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 12, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column:15 , },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 16, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 17, },
    { blocktype: 'stone', solid: true, interactive: false, row: 4, column: 8, },
    { blocktype: 'key', solid: false, interactive: true, row: 3, column: 8, },
    { blocktype: 'stone', solid: true, interactive: false, row: 4, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 5, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 12, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 5, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 4, column: 16, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 17, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 18, },
    { blocktype: 'stone', solid: true, interactive: false, row: 9, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 5, column: 22, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 23, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 23, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 22, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 24, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 25, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 26, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 28, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 30, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 31, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 32, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 35, },
    { blocktype: 'stone', solid: true, interactive: false, row: 9, column: 36, },
    { blocktype: 'door', solid: false, interactive: true, row: 8, column: 37, },
    { blocktype: 'door', solid: false, interactive: true, row: 7, column: 37, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 18, },
  // hier muss ne chest hin  { blocktype: '', solid: false, interactive: false, row: 6, column: 23, },
]

let bossFight = [
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 22, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 28, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 30, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 31, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 32, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 35, },
    { blocktype: 'door', solid: false, interactive: true, row: 16, column: 37, },
    { blocktype: 'door', solid: false, interactive: true, row: 17, column: 37, },
];

$(document).ready(function () {
    loadBoard();
    showBoard();
});


function showBoard() {

    for (let e = 0; e < board.length; e++) {

        for (let d = 0; d < board[e].length; d++) {
            let blocktype = board[e][d].blocktype;

            $('#board').append('<div class="'+blocktype+'">' + board[e][d].row + board[e][d].column + '</div>');
        }


    }
}

function generateStandardBoard() {
    let board = [];
    for (let i = 0; i < 20; i++) {

        board[i] = [];

        for (let j = 0; j < 38; j++) {

            if (i > 17) {
                board[i][j] = generateBlock('stone', true, false, i, j);
            } else {
                board[i][j] = generateBlock('air', false, false, i, j);
            }
        }
    }
    return board;
}

function generateBlock(blocktype, solid, interactive, column, row) {
    /*Befüllt die "unter Arrays" mit Objekten*/
    return {
        blocktype: blocktype,
        solid: solid,
        interactive: interactive,
        column: column,
        row: row
    }
}

function loadBoard() {
    let newBoard;
    switch(player.level) {
        case 1:
            newBoard = level1;
            break;
        case 2:
            newBoard = level2;
            break;


        case 4:
            newBoard = level4;
            break;

        default:
            location.replace('gameover.html');
            break;
    }

    for (let d = 0; d < newBoard.length; d++) {
        let blocktype = newBoard[d].blocktype;

        board[newBoard[d].row][newBoard[d].column] = generateBlock(blocktype, newBoard[d].solid, newBoard[d].interactive, newBoard[d].row, newBoard[d].column);
    }
}
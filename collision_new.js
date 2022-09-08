/*

let board = generateArray();

$(document).ready(function () {

    showBoard(board);

});




function showBoard(board) {
    console.log(board);

    for (let e = 0; e < board.length; e++) {

        for (let d = 0; d < board[e].length; d++) {


            if (board[e][d].solid == true) {
                $('#board').append('<div class="solid">' + board[e][d].row + board[e][d].column + '</div>');
            } else {
                $('#board').append('<div>' + board[e][d].row + board[e][d].column + '</div>');
            }


        }


    }
}

function generateArray() {
    let board = [];
    for (let i = 0; i < 20; i++) {

      
        board[i] = [];

        //if(i % 2 == 0) {
        for (let j = 0; j < 38; j++) {


            if (i > 16) {
                board[i][j] = generateBlock(true, i, j);

            }
            else if (j == 0) {
                board[i][j] = generateBlock(true, i, j);

            }
            else if (j == 37) {
                board[i][j] = generateBlock(true, i, j);

            }
            else if (i == 0) {
                board[i][j] = generateBlock(true, i, j);

            }
            else {
                board[i][j] = generateBlock(false, i, j);


            }
        }
    }


    return board;

}

function generateBlock(solid, row, column) {
    return {
        solid: solid,
        row: row,
        column: column,
    }
}

*/



let player = {
    dir: 'R',
    x: 3,
    y: 17,

};


function setPosition() {
    $('#player').css("top", player.y * 50);
    $('#player').css("left", player.x * 50 + 10);
    fallcheck();
}

function testBlock(x, y) {
    if(!board[x] && !board[x][y]) return false;

        return board[y][x].solid;

function testBlock(y, x) {
    console.log(board[x][y].solid)
        return board[x][y].solid;
}

function fallcheck() {
    if (testBlock(player.x, player.y + 1) == false) {
        player.y++;
        setPosition();
    }
}
$(document).ready(e => {
    setPosition();
    $(document).on('keydown', e => {
        switch (e.code) {
            case "KeyW":
                if (player.dir == 'L') {
                    
                    if (testBlock(player.x - 1, player.y - 1) == false && testBlock(player.x - 1, player.y - 2) == false && testBlock(player.x, player.y - 2) == false) {
                        player.x--;
                        player.y--;
                        setPosition();
                    }
                }
                else {
                    if (testBlock(player.x + 1, player.y - 1) == false && testBlock(player.x + 1, player.y - 2) == false && testBlock(player.x, player.y - 2) == false) {
                        //if player x +2 {}
                        //else{
                        player.x++;
                        player.y--;
                        setPosition();
                    }
                }


                break;
            case "KeyA":
                if (testBlock(player.x - 1, player.y) == false && testBlock(player.x - 1, player.y - 1) == false) {
                    player.x--;
                    setPosition();
                }
                player.dir = 'L';
                break;
            case "KeyD":
                if (testBlock(player.x + 1, player.y) == false && testBlock(player.x + 1, player.y - 1) == false) {
                    player.x++;
                    setPosition();
                }
                player.dir = 'R';
                break;
            default:
                break;
        }
    });
});


let board = generateArray();

$(document).ready(function () {

    showBoard(board);

});




function showBoard(board) {
    console.log(board);
    /*Zeigt das Spielfeld an*/

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

        /*Erste for-Schleife kreirt die "unter Arrays"*/
        board[i] = [];

        //if(i % 2 == 0) {
        for (let j = 0; j < 38; j++) {

            /*Zweite for-Schleife kreirt die Objekte in der Array und setzt solid auf true oder false*/

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
    /*Befüllt die "unter Arrays" mit Objekten*/
    return {
        solid: solid,
        row: row,
        column: column,
    }
}




let player = {
    dir: 'R',
    x: 0,
    y: 0

};


function setPosition() {
    $('#spielfigur').css("top", player.x * 50);
    $('#spielfigur').css("left", player.y * 50 + 10);
    $('#spielfigur').addClass(dir);
    fallcheck();
}

function testBlock(x, y) {
    return board[x][y].solid;
}

function fallcheck() {
    if (testBolck(player.x, player.y + 1) == false) {
        player.y++;
        setPosition();
    }
}
$(document).ready(e => {
    $(document).on('keydown', e => {
        switch (e.code) {
            case "ArrowUp":
                if (player.dir == 'L') {
                    if (testBolck(player.x - 1, player.y - 1) == false && testBolck(player.x - 1, player.y - 2) == false && testBolck(player.x, player.y - 2) == false) {
                        player.x--;
                        player.y++;
                        setPosition();
                    }
                }
                else {
                    if (testBolck(player.x + 1, player.y - 1) == false && testBolck(player.x + 1, player.y - 2) == false && testBolck(player.x, player.y - 2) == false) {
                        player.x--;
                        player.y++;
                        setPosition();
                    }
                }


                break;
            case "ArrowLeft":
                if (testBolck(player.x - 1, player.y) == false && testBolck(player.x - 1, player.y - 1) == false) {
                    player.x--;
                    dir = 'L';
                    setPosition();
                }

                break;
            case "ArrowRight":
                if (testBolck(player.x - 1, player.y) == true && testBolck(player.x - 1, player.y - 1) == true) {
                    player.x++;
                    dir = 'R'
                    setPosition();
                }
                break;
            default:
                break;
                
        }

    })

})


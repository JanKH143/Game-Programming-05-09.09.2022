var board = generateStandardBoard();
var monsterlvl = [];

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

let monster1 = [
    { dir: 'unten', monstertype: 'geist', row: 0, column: 4 },
    { dir: 'oben', monstertype: 'geist', row: 19, column: 19 },
    { dir: 'oben', monstertype: 'geist', row: 10, column: 10 },
]

let monster2 = [
    { dir: 'unten', monstertype: 'geist', row: 0, column: 15 },
    { dir: 'unten', monstertype: 'geist', row: 10, column: 9 },
    { dir: 'unten', monstertype: 'geist', row: 10, column: 8 },
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

var monsterBewegung = []

function showBoard() {

    for (let e = 0; e < board.length; e++) {

        for (let d = 0; d < board[e].length; d++) {
            let blocktype = board[e][d].blocktype;

            $('#board').append('<div class="' + blocktype + '">' + board[e][d].row + board[e][d].column + '</div>');
        }
    }

    for (let i = 0; i < monsterlvl.length; i++) {
        let monstertype = monsterlvl[i];
        $('#board').append('<div class="monster" id="monster' + i + '" class="' + monstertype + '"> </div>');
        setMonsterPosition(i);
        monsterBewegung.push(setInterval(function() {moveMonster(i)}, 500));
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

function generateMonster(dir, monstertype, row, column) {
    return {
        dir: dir,
        monstertype: monstertype,
        column: column,
        row: row
    }
}

function loadBoard() {
    let newBoard;
    let allMonster;
    switch (player.level) {
        case 1:
            newBoard = level1;
            allMonster = monster1;
            break;
        case 2:
            newBoard = bossFight;
            allMonster = monster2;
            break;
        default:
            location.replace('won.html');
            allMonster = monster1;
            break;
    }

    for (let d = 0; d < newBoard.length; d++) {
        let blocktype = newBoard[d].blocktype;

        board[newBoard[d].row][newBoard[d].column] = generateBlock(blocktype, newBoard[d].solid, newBoard[d].interactive, newBoard[d].row, newBoard[d].column);
    }
    for (let i = 0; i < allMonster.length; i++) {
        monsterlvl[i] = generateMonster(allMonster[i].dir, allMonster[i].monstertype, allMonster[i].row, allMonster[i].column);
    }
}
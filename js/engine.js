var player = {
    dir: 'R',
    x: 3,
    y: 16,
    level: 1
};


function setPosition() {
    $('#player').css("top", player.y * 50 + 10);
    $('#player').css("left", player.x * 50 + 10);
}

function testBlock(x, y) {
    if (!board[y] && !board[y][x]) return true;
    testInteraktion(x, y);
    return board[y][x].solid;
}

let hasKey = false
function testInteraktion(x, y) {
    if (board[y][x].interactive) {
        switch (board[y][x].blocktype) {
            case "key":
                hasKey = true;
                board[y][x].blocktype = "air";
                board[y][x].interactive = false;
                replaceBlock("key");
                break;
            case "closedDoorLower":
                if (hasKey == true) {
                    hasKey = false;
                    board[y][x].blocktype = "openedDoorLower";
                    board[y - 1][x].blocktype = "openedDoorUpper";
                    replaceBlock("closedDoor");
                }
                break;
            case "openedDoorLower":
                player.level++;
                $('#board').empty();
                board = generateStandardBoard();
                loadBoard();
                showBoard();
                player.x = 1;
                player.y = 16;
                setPosition();
                break;
            default:
                break;
        }
    }
}

function fallcheck() {
    while (testBlock(player.x, player.y + 2) == false) {
        player.y++;
        setPosition();
    }
}

function jumpUp() {
    if (testBlock(player.x, player.y - 1) == false) {
        player.y -= 1;
        setPosition();
    }
}

function jumpDown() {
    if (testBlock(player.x, player.y + 2) == false) {
        player.y += 1;
        setPosition();
    }
}

function jump() {
    canJump = false;
    for (let i = 0; i < 3; i++) {
        setTimeout(jumpUp, i * 100);
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(jumpDown, 300 + i * 100);
    }
    setTimeout(function () { canJump = true; fallcheck() }, 600);
}

let canJump = true;

$(document).ready(e => {
    setPosition();

    $(document).on('keydown', e => {
        switch (e.code) {
            case "Space":
            case "ArrowUp":
            case "KeyW":
                if (canJump)
                    jump();

                break;
            case "ArrowLeft":
            case "KeyA":
                if (testBlock(player.x - 1, player.y + 1) == false && testBlock(player.x - 1, player.y) == false) {
                    player.x--;
                    setPosition();
                }
                if (canJump)
                    fallcheck();
                player.dir = 'L';
                break;

            case "ArrowRight":
            case "KeyD":
                if (testBlock(player.x + 1, player.y + 1) == false && testBlock(player.x + 1, player.y) == false) {
                    player.x++;
                    setPosition();
                }
                if (canJump)
                    fallcheck();
                player.dir = 'R';
                break;
            default:
                break;
        }
    });
});
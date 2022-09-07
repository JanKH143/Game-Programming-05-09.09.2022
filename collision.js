import {board} from "board.js";

function style(element, property) {
    return getComputedStyle(element).property;
}

//CSS Wert erkennen

$(document).ready(function () {
    let element
    let canMoveLeft
    let canMoveRight
    let canJump

    for (let i = 0; i < 20; i++) {
        $(document).keydown(function () {
            for (let j = 0; j < 38; j++) {
                element = board[i][j];
                if (element.solid == true) {            //solid ja oder nein
                    if (style(player, left) == style(element, right)) {
                        canMoveLeft = false;
                    }
                    else {
                        canMoveLeft = true
                    }
                    if (style(player, right) == style(element, left)) {
                        canMoveRight = false;
                    }
                    else {
                        canMoveRight = true
                    }
                    if (style(player, top) == style(element, bottom)) {
                        canJump = false;
                    }
                    else {
                        canJump = true
                    }
                }
            }

        });
    }
    switch (e.code) {             //move
        case "KeyW":
            player.top -= 50;
            break;
        case "KeyA" && canMoveLeft == true:
            player.left -= 50;
            break;
        case "KeyS":
            player.top += 50;
            break;
        case "KeyD" && canMoveRight == true:
            player.left += 50;
            break;
        default:
            break;
    }
});
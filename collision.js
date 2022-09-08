
//import board from "./board.js";
console.log(board);

let player = {
    left: 950,
    top: 550,
}

function setPosition() {
    $("#player").css({ "left": player.left, "top": player.top });
}
function style(element, property) {
    return getComputedStyle(element).property;
}

//CSS Wert erkennen
let board = generateArray();
$(document).ready(function () {
    setPosition();
    let element
    let canMoveLeft = true
    let canMoveRight = true
    let canJump = true
    $(document).on("keydown", e => {

        for (let i = 0; i < 20; i++) {

            for (let i = 0; i < 20; i++) {
                $(document).keydown(e => {
                    for (let j = 0; j < 38; j++) {
                        element = board[i][j];
                        if (element.solid == true) {            //solid ja oder nein
                            if (player.left == j * 50) {
                                canMoveLeft = false;
                            }
                            else {
                                canMoveLeft = true
                            }
                            if (player.left + 50 == j * 50 + 50) {
                                canMoveRight = false;
                            }
                            else {
                                canMoveRight = true
                            }
                            if (player.top == i * 50) {
                                canJump = false;
                            }
                            else {
                                canJump = true
                            }
                        }
                    }
                }

                );
            }


            switch (e.code) {             //move
                case "KeyW":
                    player.top -= 50;
                    break;
                case "KeyA":
                    if (canMoveLeft == true) {
                        player.left -= 50;
                        break;
                    }
                case "KeyS":
                    player.top += 50;
                    break;
                case "KeyD":
                    if (canMoveRight == true) {
                        player.left += 50;
                        break;
                    }
                default:
                    break;
            }
            setPosition();
        };
    });
});
$(document).on("keydown", e => {
    if (e.code == KeyA) {
        
    }
    if (e.code == KeyD) {

    }
})

$(document).on("keyup", e=> {
    if (e.code == KeyA) {
        $("#player").addClass("playerStandingLeft");
    }
    if (e.code == KeyD) {
        $("#player").addClass("playerStandingRight");
    }
})
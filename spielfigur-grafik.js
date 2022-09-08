$(document).ready(function () {
    $(document).on("keydown", e => {
        switch (e.code) { 
    
            case "KeyA":
                $("#player").removeClass("playerStandingRight");
                $("#player").removeClass("playerStandingLeft");
                $("#player").removeClass("playerWalkingRight");
                $("#player").addClass("playerWalkingLeft");
                break;
    
            case "KeyD":
                $("#player").removeClass("playerWalkingLeft");
                $("#player").removeClass("playerStandingRight");
                $("#player").removeClass("playerStandingLeft");
                $("#player").addClass("playerWalkingRight");
                break;
    
            default:
                break;
        }
    })

    $(document).on("keyup", e => {
        switch (e.code) {
            case "KeyA":
                $("#player").removeClass("playerWalkingRight");
                $("#player").removeClass("playerWalkingLeft");
                $("#player").removeClass("playerStandingRight");
                $("#player").addClass("playerStandingLeft");
                break;

            case "KeyD":
                $("#player").removeClass("playerWalkingRight");
                $("#player").removeClass("playerWalkingLeft");
                $("#player").removeClass("playerStandingLeft");
                $("#player").addClass("playerStandingRight");
                break;

            default:
                break;
        }

    })
})
$(document).ready(function () {
    $(document).on("keydown", e => {
        /*switch (e.code) { 
    
            case "KeyA":
    
                break;
    
            case "KeyD":
    
                break;
    
            default:
                break;
        }*/
    })

    $(document).on("keyup", e => {
        switch (e.code) {
            case "KeyA":
                $("#player").removeClass("playerStandingRight");
                $("#player").addClass("playerStandingLeft");
                break;

            case "KeyD":
                $("#player").removeClass("playerStandingLeft");
                $("#player").addClass("playerStandingRight");
                break;

            default:
                break;
        }

    })
})
let player = {
    top: 0,
    left: 0
}
function moveMonsterRight() {
    $(".player").addClass();
    if(player.left < 200){
        player.left = player.left + 5;
        $(".player").css("left", player.left);
        setTimeout(moveMonsterRight, 100);
        console.log("Schleife, -->");
    }
    else{
      $('#monster2').hide();
      $('#monster1').show();
        moveMonsterLeft();
    }
  }
  function moveMonsterLeft () {
    if(player.left > 0){
        player.left = player.left - 5;
        $(".player").css("left", player.left);
        console.log("Schleife, <--");
        setTimeout(moveMonsterLeft, 100);
    }
    else{
       $('#monster1').hide();
       $('#monster2').show();
       moveMonsterRight();
    }
     }
$(document).ready(function () {
    $('#monster1').hide();
    $('#monster2').show();
    moveMonsterRight();
        });
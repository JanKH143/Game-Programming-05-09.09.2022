let player = {
    top : 0, 
    left : 0,
    collected: 0
}

let notjumping = true;
$(document).ready( e => {
    player.left=document.getElementById("framepacman").offsetHeight /2;
    player.top = document.getElementById("framepacman").offsetHeight /2;
    setPosition();
    $('#spielfigur').addClass('dirR');
    $(document).on('keydown', e => {
    $('#spielfigur').removeClass('dirO dirU dirR dirL');
    
    switch(e.code) {
        case "ArrowUp":

            if (notjumping) {
                notjumping = false;
                if (player.top  > 50 ){
                    player.top -= 50;}
                    
                setTimeout(jump,500)
            }
            
            $('#spielfigur').addClass('dirR');

          break;
        case "ArrowDown":
            if (player.top < document.getElementById("framepacman").offsetHeight -150){
            player.top += 50;}
            $('#spielfigur').addClass('dirU');
            
          break;
        case "ArrowLeft":
            if (player.left > 0){
            player.left -= 50;}
            $('#spielfigur').addClass('dirL');
           
          break;
        case "ArrowRight":
            if (player.left < document.getElementById("framepacman").offsetWidth -200 ){
            player.left += 50;}
            $('#spielfigur').addClass('dirR');
            
            break;
        default:
            $('#spielfigur').addClass('dirR');
            
            break;
        }
        setPosition();
    
    })
      
});	
function setPosition() {
    $('#spielfigur').css("top" , player.top);
    $('#spielfigur').css("left" , player.left);   
}
function jump(){
    player.top += 50;
    
    setPosition();
    setTimeout(function(){
        notjumping = true;
    },1000);
    
}
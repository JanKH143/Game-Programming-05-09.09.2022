let player={
    top:0,
    left:0
}
function startPosition(){
    player.left=200;
    player.top=200;
    setPosition();
}
function setPosition(){
    $("#player").css("top", player.top);
    $("#player").css("left", player.left);
}

function jump(){
    jumpup();
    setTimeout(jumpdown(), 3500);
    
}
function jumpup(){
    for(let i = 0 ; i < 5; i++){
        setTimeout( function(){
         player.top = player.top - 10;
        setPosition();
         },500);
        
    }
   
    
}
function jumpdown(){
    for(let i = 0 ; i < 5; i++){
        setTimeout( function(){
        
            player.top = player.top + 10;
            setPosition();
             },500);
        console.log(player.top);
    }
}
$(document).ready(e=>{
    startPosition();
    console.log(player.top);
    console.log(player.left);

    $(document).on("keydown", e=>{
        console.log(player.top);
    console.log(player.left);
        switch(e.key){
        case"w":
        case"ArrowUp":
            jump();
            break;
        }
      
    })
})
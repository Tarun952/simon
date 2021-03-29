var level=0;
$(document).keypress(function(){
if(level===0){
    newseq();
    }
});

var clickArray=[];
var gamePattern=[];
var buttonColor=['red','green','yellow','blue'];
function newseq(){
  
   
var randomnum=Math.floor(Math.random()*4);
var ranchoosColor=buttonColor[randomnum];
gamePattern.push(ranchoosColor);

 $('#'+ranchoosColor).fadeOut().fadeIn();
sound(ranchoosColor);
$('h1').text("Level "+level);
level++;

};
var count=0;
$('.btn').click(function(){
    var number= $(this).attr("id");
   clickArray.push(number);
    $("."+number).addClass("pressed");
   
     sound(number);
     setTimeout(remove,100);
     function remove(){
         $('.'+number).removeClass("pressed");
     }
    
if(gamePattern[count]===number){
count++;
if(gamePattern.length===count){
    newseq();  
    count=0;
}
   
}
else{
    $("body").addClass("game-over");
    setTimeout(remove,100);
    function remove(){
        $('body').removeClass("game-over");
    }
    
    sound("wrong");
    $('h1').text("WRONG,Press any key to continue");
    level=0;
}

 });



// function sound(value){
//     switch(value){
//    case "blue":var audio=new Audio("sounds/blue.mp3");
//    audio.play();
//    break;

//    case "red":var audio=new Audio("sounds/red.mp3");
//    audio.play();
//    break;

//    case "yellow":var audio=new Audio("sounds/yellow.mp3");
//    audio.play();
//    break;

//    case "green":var audio=new Audio("sounds/green.mp3");
//    audio.play();
//    break;

// case "wrong":var audio=new Audio("sounds/wrong.mp3");
// audio.play();
// break;
//  }
  
// }
function sound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


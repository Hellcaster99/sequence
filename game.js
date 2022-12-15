var buttonColors = ["red","blue","green","yellow"];

var gameSequence = [];

var userSequence = [];

var started = false;
var level=0;

$(document).keypress(function(){
  if(!started){
    started=true;
    $('#level-title').text('Level '+level);
    setTimeout(function(){nextSequence();}, 500);
  }
})

function nextSequence(){
  userSequence=[];
  level++;
  $('#level-title').text('Level '+level);
  var x= Math.floor(Math.random()*4);
  var nextColor = buttonColors[x];
  gameSequence.push(nextColor);
  $('#'+nextColor).fadeIn(500).fadeOut(100).fadeIn(100);
}

$('.btn').click(function (){
  var userClickedButton = $(this).attr('id');
  userSequence.push(userClickedButton);
  animatepress(userClickedButton);
  checkanswer(userSequence.length-1);
});

function animatepress(color){
  $('#'+color).addClass('pressed');
  setTimeout(function (){
    $('#'+color).removeClass('pressed');
  },100);
}

function checkanswer(currentColor){
  if(started){
    if(gameSequence[currentColor]==userSequence[currentColor]){
      if(gameSequence.length==userSequence.length){
        $('#level-title').text('Correct');
        setTimeout(function(){
          setTimeout(nextSequence,500);
        },500);
      }
    }else{
      $('#level-title').text('InCorrect');
      $('body').css('background-color','red');
      started=false;
      setTimeout(function (){
        $('#level-title').text('Game Over');
      },1000);
    }
  }
  }

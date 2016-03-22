$(document).ready(function() {
          //$('p').fadeOut('slow');
var moveAmount=200;
function theBoxTransformNeg(value){
  if(value==null){
          moveAmount-=100;
          $('#moveme').css('transform', 'translate('+moveAmount+'px'+')');
          console.log('even');
}else{
        moveAmount=value;
          $('#moveme').css('transform', 'translate('+moveAmount+'px'+')');
          console.log('even');

}
}

function theBoxTransformPos(value){
  if(value==null){
        moveAmount+=100;
        $('#moveme').css('transform', 'translate('+moveAmount+'px'+')');
        console.log('odd');
      }
  else{
          moveAmount=value;
          $('#moveme').css('transform', 'translate('+moveAmount+'px'+')');
          console.log('odd');
        }
}
 function moveTheBox(){

       setTimeout(theBoxTransformPos,200);
       setTimeout(theBoxTransformNeg,400);
       setTimeout(theBoxTransformPos,800);
       setTimeout(theBoxTransformNeg,1200);
 }
 $('#start').click(function() {
      $('.progressBar').css('animation-play-state', 'running');
      $('p').css('animation-play-state', 'running');
      //$('#moveme').css('transform', 'translate('+moveAmount+'px'+')');
     // moveTheBox();
});






});

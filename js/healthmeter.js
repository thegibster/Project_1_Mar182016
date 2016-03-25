var clicked =$('.health').length;
var i =0;
// $('#startButton').on('click',function() {

// if(clicked>=i){
//   $('#meter'+clicked).hide('slow');
//   console.log("boom");
//   clicked--
// }if (i>clicked) {
//   alert("h");
// }

// });


//work on changing the length to the div, they hide but are still there

function wayToGo(){
  $(document).find('script')[3].remove();
  $('#topBar').remove()
  $('#healthMeter').remove()
  $('.health').remove()
  $('canvas').remove()
  document.body.innerHTML ='<video autoplay  poster="" id="playMe"   controls preload> <source src="video/allWin.m4v" type="video/mp4"></video>';


}
// document.body.innerHTML ='<audio src="sounds/EXPLOSIONS.mp3" autoplay></audio>';
function PlaySound() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'sounds/spengine.mp3');
  audioElement.play();
}

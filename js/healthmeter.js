var clicked =$('.health').length;
var i =0;
$('#startButton').on('click',function() {

if(clicked>=i){
  $('#meter'+clicked).hide('slow');
  console.log("boom");
  clicked--
}if (i>clicked) {
  alert("h");
}

});


//work on changing the length to the div, they hide but are still there

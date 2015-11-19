$(document).ready(function() {
  
  $('.pic').fadeOut(3000,function(){
    $('.info').show();
    $('.info').fadeOut(3000,function(){
    $('.jq').show();
    $('.jq').fadeOut(3000,function(){
      $('.texts').show();
    });
  });
  });
   $(document).keydown(function(e){
      if(e.keyCode==88){
        playHadouken();
    $('.ryu-still').hide();
    $('.ryu-cool').show();
    }
    });
   $(document).keyup(function(e){
      if(e.keyCode==88){

    $('.ryu-still').show();
    $('.ryu-cool').hide();
    }
    });
    $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
   $('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    }
  );
    // animate hadouken to the right of the screen
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

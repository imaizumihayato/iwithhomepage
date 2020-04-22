$(function(){
  $('.fas').click(function(){
    $('.modal').addClass("modal-active");

  });

  $('this').find(".fas").addClass("modal-active");
  $('.modal').click(function() {
    $('.modal').removeClass("modal-active");

    $('.fas').removeClass("modal-active");
  });


});

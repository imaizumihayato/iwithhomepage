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

$(function(){
  $('a[href^="#"]').click(function(){
    $('.modal').removeClass("modal-active");
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

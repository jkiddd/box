// $(document).ready(function(){ 
//   $(window).scroll(function(){
//   if ($(this).scrollTop() > 200) {
//   $('.scrollup').fadeIn();
//   } else {
//   $('.scrollup').fadeOut();
//   }
//   });
   
//   $('.scrollup').click(function(){
//   $("html, body").animate({ scrollTop: 0 }, 600);
//   return false;
//   });
   
//   });

  var $btnTop = $(".scrollup")
$(window).on("scroll",function () {
  if($(window).scrollTop()>= 500){
    $btnTop.fadeIn();
  }else {
    $btnTop.fadeOut();
  }
}); 
$btnTop.on("click",function(){
  $('html,body').animate({scrollTop:0},900)
});


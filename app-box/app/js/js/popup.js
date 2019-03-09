// $(document).ready(function(){
//     $('.header__bt').on("click",function(){
//       $('.popup').show();       
//     });
//     $('.close').on("click",function(){
//       $('.popup').hide();  
//     });
// });

// с анимацией на jq

$(document).ready(function(){
  $('.header__bt').on("click",function(){
    $('.popup').fadeIn(300);       
  });
  $('.close').on("click",function(){
    $('.popup').fadeOut(300);  
  });
});


$(document).ready(function(){
  $('.slaider').slick(
  {   
      autoplay:false,
      autoplaySpeed:2000,
      slidesToShow: 1,
      slidesToScroll: 1,     
      dots: false,
      cssEase: 'linear',    
      }    
  );
  $('.slaider__mini').slick(
    {   
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,     
        dots: false,
        cssEase: 'linear',    
        }    
    );
  });

  // $(document).ready(function(){
  //   $('.slaider__mini').slick(
  //   {   
  //       autoplay:true,
  //       autoplaySpeed:2000,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,     
  //       dots: false,
  //       cssEase: 'linear',    
  //       }    
  //   );
  //   });

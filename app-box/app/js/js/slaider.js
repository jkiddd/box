$(document).ready(function(){
  $('.slaider').slick(
  {   slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,   
      dots: false,
      cssEase: 'linear',
      asNavFor: '.slaider__mini',
      initialSlide: 2,
             
      }    
  );
  $('.slaider__mini').slick(
    {           
        slidesToShow: 4,
        slidesToScroll: 1,                
        dots: false,
        cssEase: 'linear',
        asNavFor: '.slaider',
        centerPadding:'50px',
        focusOnSelect: true,
        centerMode: true,
        centerPadding:'40px',           
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

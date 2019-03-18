$(document).ready(function(){
  $('.feedback__slaider').slick(
  {   slidesToShow: 3,
      slidesToScroll: 1,      
      dots: false,   
      cssEase: 'linear', 
      centerMode: true,
      focusOnSelect: true,
      responsive:[ 
      {
        breakpoint: 576,
        settings: {
          arrows:true, 
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows:true, 
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows:true, 
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      ]                
      }    
  );

  });
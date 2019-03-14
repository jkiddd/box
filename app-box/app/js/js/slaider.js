$(document).ready(function(){
  $('.slaider').slick(
  {   slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,   
      dots: false,   
      asNavFor: '.slaider__mini',
      cssEase: 'linear',             
      }    
  );
  $('.slaider__mini').slick(
    {           
        slidesToShow: 4,
        slidesToScroll: 1,                
        dots: false,        
        asNavFor: '.slaider',
        cssEase: 'linear',
        focusOnSelect: true,
        centerMode: true,
        // prevArrow: '<button class="slaider-arrow-prev"></button>',
			  // nextArrow: '<button class="slaider-arrow-next"></button>',                  
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

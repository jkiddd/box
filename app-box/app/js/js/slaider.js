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
        responsive:[ {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }
     
        ]                  
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

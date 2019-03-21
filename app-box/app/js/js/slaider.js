$(document).ready(function(){
  $('.slaider').slick(
  {   slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,            
      dots: false,   
      asNavFor: '.slaider__mini',
      cssEase: 'linear',
      responsive:[ 
      {
        breakpoint: 576,
        settings: {
          arrows:true, 
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows:true, 
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows:true, 
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      ]             
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
        // nextArrow:'<i class="slick-prev-left"></i>',          
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

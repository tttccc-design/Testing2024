var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2" ,"mySlides3"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {

  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
} 

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 $
 $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
          autoplay:true,
      });

 /*animated*/
 $(document).ready(function(){


         function showImages(el) {
                var windowHeight = jQuery( window ).height();
                $(el).each(function(){
                    var thisPos = $(this).offset().top;

                    var topOfWindow = $(window).scrollTop();
                    if (topOfWindow + windowHeight - 200 > thisPos ) {
                        $(this).addClass("animated fadeInUp ");
                    }
                });
            }

            // if the image in the window of browser when the page is loaded, show that image
            $(document).ready(function(){
                    showImages('.star');
            });

            // if the image in the window of browser when scrolling the page, show that image
            $(window).scroll(function() {
                    showImages('.star');
            });
});
  /*filter*/
 $(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
 

 
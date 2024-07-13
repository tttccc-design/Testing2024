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

         function showImages(el) {
                var windowHeight = jQuery( window ).height();
                $(el).each(function(){
                    var thisPos = $(this).offset().top;

                    var topOfWindow = $(window).scrollTop();
                    if (topOfWindow + windowHeight - 200 > thisPos ) {
                        $(this).addClass("animated fadeInUp  ");
                    }
                });
            }

            // if the image in the window of browser when the page is loaded, show that image
            $(document).ready(function(){
                    showImages('.star1');
            });

            // if the image in the window of browser when scrolling the page, show that image
            $(window).scroll(function() {
                    showImages('.star1');
            });
});

 $(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
  });
});
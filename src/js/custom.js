$(document).ready(function(){
  $('.slider').slick();

  // SMOOTH SCROLL

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
        }, 600, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    // BUY NOW HOVER
    $(function() {
       $('.plans__link').hover( function(){
          $(this).parent().addClass("active");
       },
       function(){
          $(this).parent().removeClass("active");
       });
    });

    // MENU FIXED
    var menu = $('.main-menu');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = 90;

        if (y >= z) {
            menu.addClass('fixed');
        }
        else{
            menu.removeClass('fixed');
        }
    });
});

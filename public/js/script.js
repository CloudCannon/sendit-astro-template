$(document).ready(function () {
   'use strict';

   // Magnific Popup
   $('.popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
   });

   const counterUp = window.counterUp.default

const callback = entries => {
   entries.forEach( entry => {
      const el = entry.target
      if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
         counterUp( el, {
            duration: 1000,
            delay: 16,
         } )
         el.classList.add( 'is-visible' )
      }
   } )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const els = document.querySelectorAll( '.counter' )
els.forEach(el => {
   IO.observe( el )
})



   //Show password
   $('.viewPassword').click(function () {
      $(this).toggleClass('fa-eye fa-eye-slash');
      var input = $($(this).attr('toggle'));
      if (input.attr('type') == 'password') {
         input.attr('type', 'text');
      } else {
         input.attr('type', 'password');
      }
   });

   // Scroll spy
   $(document).ready(function () {
      $('body').scrollspy({
         target: '#scrol-nav',
         offset: 20,
      });

      // Navbar fade
      changeNavbar();

      $(window).scroll(function () {
         changeNavbar();
      });

      function changeNavbar() {
         var navbar = $('#scrol-nav');
         if ($(this).scrollTop() >= 20) {
            navbar.addClass('bg-light').removeClass('bg-transparent');
         } else if ($(this).scrollTop() < 20) {
            navbar.removeClass('bg-light').addClass('bg-transparent');
         }
      }
   });
   //end  Scroll spy style
});

(function ($) {
  $('.fp-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<span class="prev-arrow">PRE</span>',
    nextArrow: '<span class="next-arrow">Next</span>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
  $('.blog-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
          infinite: true,
        },
      },
    ],
  });
   $('.cr-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
	dots: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
  $('.tm-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<span class="prev-arrow"> <img src="http://wemotif.com/staging1/wp-content/uploads/2021/06/Combined-Shape.png" alt=""></span>',
    nextArrow: '<span class="next-arrow"><img src="http://wemotif.com/staging1/wp-content/uploads/2021/06/Combined-Shape-Copy.png" alt=""></span>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          infinite: true
        },
      },
    ],
  });

  //responsive navbar
  $('.header-menu-bar').on('click', function () {
    $('body').addClass('body-mobile-menu');
  });
  $('.header-mobile-close').on('click', function () {
    $('body').removeClass('body-mobile-menu');
  });
  $('.breadcrumb-nav-mobile h2').on('click', function () {
    $('.breadcrumb-nav-mobile ul').slideToggle();
  });

  //counterup
  $(".counter").counterUp({time:4000});
  // bind the click to all headers

  var parent = $('#toggle-view'), // storing main ul for use below
  delay = 200; // storing delay for easier configuration

$('li', parent).click(function () {
  // get the li that this header belongs to
  var li = $(this).closest('li');

  // check to see if this li is not already being displayed
  if (!$('.t-c', li).is(':visible')) {
    // loop on all the li elements
    $('li', parent).each(function () {
      // slide up the element and set it's marker to '+'
      $('.t-c', $(this)).slideUp(delay);
      $('span', $(this)).text('+');
    });

    // display the current li with a '-' marker
    $('.t-c', li).slideDown(delay);
    $('span', li).text('-');
  } else {
    $('.t-c', li).slideUp(delay);
    $('span', li).text('+');
  }
});
})(jQuery);

//tab
function openSite(evt, siteName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(siteName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function stickynavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

  //sticky navbar
  window.onscroll = function () {
    stickynavbar();
  };


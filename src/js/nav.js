let init = () => {
  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.nav-links').toggleClass('active');
    $('.nav-logo').toggleClass('active');
    $('.navs').toggleClass('nav-active');
  });
  $('.has-sub-menu').on('click', function (e) {
    $('.nav-sub-menu').toggleClass('active');
    console.log('click');
  });
  $(window).on('scroll', function () {
    if (window.pageYOffset > 57) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });
};

export default {init};

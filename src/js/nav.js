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
};

export default {init};

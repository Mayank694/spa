let init = function () {
  // $(function () {
  var target = '.country, .country-value, .item';
  $('input,select').on('focus', function () {
    $(this).siblings('label').addClass('active');
  });
  $('input,select').on('blur', function () {
    if ($(this).val() === '') {
      $(this).siblings('label').removeClass('active');
    }
  });
  $('.country').on('click', function () {
    if ($('.drop-down').hasClass('active')) {
      $('.drop-down').removeClass('active');
    } else {
      $('.drop-down').addClass('active');
      $('.country-value').focus();
    }
  });
  $('.country-value').on('keyup', function () {
    $(this).parent().parent().find('.item').each(function () {
      if ($('.country-value').val() !== '' && $(this).html().toLowerCase().indexOf($('.country-value').val().toLowerCase()) === -1) {
        $(this).css('display', 'none');
      } else {
        $(this).css('display', 'block');
      }
    });
    if ($('.list').height() === 0) {
      $(this).append("<li class='item'>No Match Found</li>");
    }
  });
  $(document).on('click', function (event) {
    if (!event.target.matches(target)) {
      $('.drop-down').removeClass('active');
    }
  });
  $('.item').on('click', function () {
    console.log($(this).html());
    $('.country').val($(this).html());

    $('.drop-down').removeClass('active');
  });
  // })
};

export default {init};

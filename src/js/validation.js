let validation = function () {
  $.validator.setDefaults({
    highlight: function (element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function (element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
    errorPlacement: function (error, element) {
      element.siblings('.error-wrapper').append(error);
    },
    errorElement: 'em'
  });
  $.validator.addMethod('strongPassword', function (value, element) {
    return value.length > 6;
  });
  $('.jquery-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        strongPassword: true
      },
      name: {
        required: true
      },
      company: {
        required: true
      },
      cpassword: {
        required: true,
        equalTo: '#password'
      },
      country: {
        required: true
      }
    },
    messages: {
      email: {
        required: 'please enter an email address',
        email: 'valid email'
      },
      password: {
        strongPassword: 'Password should be atleast 8 digits'
      },
      country: {
        required: 'Please select an option'
      }
    }
  });
};

export default {validation};

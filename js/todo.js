$(document).ready(function() {
  $('form').submit(function () {
      if ($('input').val()) {
          var input_value = $('input').val();
          $('ul').append('<li>' + input_value + '<a href="">x</a></li>');
      };
      $('input').val('');
      return false;
  });
  $(document).on('click', 'a', function (e) {
      e.preventDefault();
      $(this).parent().slideUp(250, function(){
        $(this).remove()
      });
  });
});

(function($) {
  $(function() {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('.timepicker').pickatime({
    //   default: 'now',
    //   twelvehour: false,
    //   donetext: 'OK',
    //   cleartext: 'Clear',
    //   canceltext: 'Cancel',
    //   autoclose: false,
    //   ampmclickable: true,
    //   aftershow: function() {}
    // });
    $(".fixed-action-btn li").on('click', function() {
      $("#main-btn").click();
    });
  });

  $('.click-to-toggle').on('click', function(e) {
    var current = e.currentTarget;
    // looping on every opened menu (.active)
    $('.click-to-toggle.active').filter(function() {
      // close it if it's not the clicked menu (with materialize's closeFAB())
      return !(this === current);
    }).closeFAB();
  });
})(jQuery);

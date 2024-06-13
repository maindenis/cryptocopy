var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

    // --------------

    $(".respbtn").click(function(e) {
      e.preventDefault();
      if( $("#respNav").is(":hidden") ) {
          $("#respNav").fadeIn(300);
      } else {
          $("#respNav").fadeOut(300);
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#respNav").is(":visible")) {
            $("#respNav").fadeOut(300);
        }
    });

    $(".close_nav").click(function(e) {
        e.preventDefault();
        $("#respNav").fadeOut(300);
    });

});
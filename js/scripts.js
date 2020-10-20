$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").fadeIn();
  });
  $("#hide-walrus").click(function() {
    $(".walrus-showing").fadeOut();
  });

});
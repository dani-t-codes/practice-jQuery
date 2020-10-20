$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").fadeIn();
    $("#walrus-hidden").hide();
  });
  $("#hide-walrus").click(function() {
    $(".walrus-showing").fadeOut();
    $("#walrus-hidden").show();
  });



  // $("h1").click(function() {
  //   $("#peek-a-boo").append("<li>test<li>").addClass("test");
  // })

});
$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").fadeIn();
    // $(".walrus-showing").prepend("<p>Look at this cute walrus!</p><p><span>Click here</span> to hide her again.</p>");
    // $(".walrus-showing").find("span").attr("id", "hide-walrus");
    $("#walrus-hidden").toggle();
  });
  $("#hide-walrus").click(function() {
    $(".walrus-showing").fadeOut();
    $("#walrus-hidden").toggle();
  });



  // $("h1").click(function() {
  //   $("#peek-a-boo").append("<li>test<li>").addClass(".test");
  // })

$("#dark").click(function() {
  $("body").removeClass();
  $("body").addClass("dark-mode");
  });

$("#light").click(function() {
  $("body").removeClass();
    $("body").addClass("light-mode");
    });
 });
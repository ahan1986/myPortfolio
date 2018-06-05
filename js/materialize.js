$(document).ready(function(){
    $(".trail").hide();
    $("#work").hide();
    $(".trail").hide();
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("nav").offset().top > 100) {
      $("nav").addClass("navShrink"); 
      
    } else {
      $("nav").removeClass("navShrink");
      
    }

    if($("nav").offset().top > 30) {
        $("#one").addClass("oneImage");
        $("#nav-mobile").addClass("shrink");
        $(".one").addClass("oneShrink");
        $(".me").addClass("meFocus");
        $("#me").html(`<div id="meme" class="me">Hello! My name is Andrew Han, and currently, I am a student at Penn Coding BootCamp located in Philadelphia, Pennsylvannia.
          Previously, I ran a carwash in Downingtown, PA for eight years and sold it on March 2017. If I'm not coding, I am
          usually on my guitar jamming to random songs. Through Penn Coding Bootcamp, I know I will become the best Fullstack
          developer in the whole-wide world!</div>`);
          $("#justMe").fadeIn().html(`<div class="aboutme">About Me</div>`);
        

    } else {

        $("#one").removeClass("oneImage"); 
        $(".one").removeClass("oneShrink");
        $("#nav-mobile").removeClass("shrink");
        $(".me").removeClass("meFocus");
        $("#meme").remove();
        $(".aboutme").remove();
    }

    if($("nav").offset().top > 10) {
        $(".trail").fadeIn();
        $("#work").fadeIn("slow");
        
    } else {
        $(".trail").fadeOut();
        $("#work").fadeOut("slow");
    }
  
    if($("nav").offset().top > 720) {
      $("#cinemappr").addClass("oneImage1");
    } else {
      $("#cinemappr").removeClass("oneImage1");
    }

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  // using the above function to get the scale-in working when scrolling
  
    $('.carousel').carousel();
  });
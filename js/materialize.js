$(document).ready(function(){
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("nav").offset().top > 100) {
      $("nav").addClass("navShrink"); 
      
    } else {
      $("nav").removeClass("navShrink");
      
    }

    if($("nav").offset().top > 50) {
        $("#one").addClass("oneImage");
        $("#nav-mobile").addClass("shrink");
        $(".one").addClass("oneShrink");
        $(".me").addClass("meFocus");
        $(".me").addClass("scale-in");
    } else {
        $("#one").removeClass("oneImage"); 
        $(".one").removeClass("oneShrink");
        $("#nav-mobile").removeClass("shrink");
        $(".me").removeClass("meFocus");
        $(".me").removeClass("scale-in");
    }

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  // using the above function to get the scale-in working when scrolling
  
    $('.carousel').carousel();
  });
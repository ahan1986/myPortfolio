$(document).ready(function(){
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("nav").offset().top > 100) {
      $("nav").addClass("navShrink");
      $("#nav-mobile").addClass("shrink");
      $(".one").addClass("oneShrink");
      $("#one").addClass("oneImage");
    } else {
      $("nav").removeClass("navShrink");
      $("#nav-mobile").removeClass("shrink");
      $(".one").removeClass("oneShrink");
      $("#one").removeClass("oneImage"); 
    }

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  
    $('.carousel').carousel();
  });
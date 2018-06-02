  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("nav").offset().top > 100) {
      $("nav").addClass("navShrink");
      $("#nav-mobile").addClass("shrink");
    } else {
      $("nav").removeClass("navShrink");
      $("#nav-mobile").removeClass("shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
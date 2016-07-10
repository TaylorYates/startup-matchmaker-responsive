function menuDown() {
  $("nav.mobile").slideToggle();
}


function start() {
  $("#hamburger").click(menuDown);
}

$(document).ready(start);

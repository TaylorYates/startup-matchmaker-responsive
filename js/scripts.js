function menuDown() {
  $("nav").slideToggle();
}


function start() {
  $("#hamburger").click(menuDown);
  
}

$(document).ready(start);

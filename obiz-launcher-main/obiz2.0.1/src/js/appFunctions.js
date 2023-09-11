// When the user clicks on the button, theme is toggled 
function togglethemeFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
  
  
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
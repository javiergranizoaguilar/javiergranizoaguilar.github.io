
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});
document.getElementById("cambiarFondoBtn").addEventListener("click", function() {
    document.body.classList.toggle("cambiarFondo");
  });  
  document.getElementById("cambiarFondoBtn").addEventListener("click", function() {
    var imagenes = document.getElementsByTagName("img");
  for (var i = 0; i < imagenes.length; i++) {
    if (imagenes[i].src.endsWith("download5.gif")) {
      imagenes[i].src = "P4id.gif";
    } else if (imagenes[i].src.endsWith("P4id.gif")) {
      imagenes[i].src = "download5.gif";
    }
  }
  });
  
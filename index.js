const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});
document.getElementById("cambiarFondoBtn").addEventListener("click", function() {
    document.body.classList.toggle("cambiarFondo");
  });
  
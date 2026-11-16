// Pequeña animación al cargar
document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".titulo");
  titulo.style.opacity = 0;
  setTimeout(() => {
    titulo.style.transition = "opacity 2s";
    titulo.style.opacity = 1;
  }, 500);
});
// Espera a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
  // Todas las cajas de la galería (los <a> dentro de .grid)
  const items = document.querySelectorAll('.grid a');
  const modalEl = document.getElementById('lightbox');
  const modalImg = document.getElementById('lightboxImg');

  // Instancia del modal de Bootstrap
  const modal = new bootstrap.Modal(modalEl);

  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // que no navegue al href=""

      const img = this.querySelector('img');
      if (!img) return;

      // Pasa la misma imagen al modal
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';

      // Muestra el modal con fondo oscuro
      modal.show();
    });
  });
});

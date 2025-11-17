// Validación simple del formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactoForm');
    const alertBox = document.getElementById('formAlert');
  
    if (!form) return;
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // evitamos envío real (sirve para el TP)
      event.stopPropagation();
  
      // Quitamos la alerta si estaba visible
      if (alertBox) {
        alertBox.classList.add('d-none');
      }
  
      // Usamos las validaciones nativas de HTML5
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
  
      // Si todo está OK, mostramos mensaje de éxito y reseteamos
      if (alertBox) {
        alertBox.classList.remove('d-none');
      }
  
      form.reset();
      form.classList.remove('was-validated');
    });
  });
  
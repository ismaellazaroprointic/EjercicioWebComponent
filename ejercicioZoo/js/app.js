// Inserta cabecera y pie en todas las páginas
document.addEventListener('DOMContentLoaded', async () => {
    await insertarParcial('#cabecera', 'partials/cabezera.html');
    await insertarParcial('#pie', 'partials/pie.html');
  
    // Página Animales: animación canguro y carrusel
    const canguro = document.getElementById('canguro-saltarin');
    const carrusel = document.getElementById('carrusel-animales');
    if (canguro && carrusel) {
      canguro.classList.add('canguro-activo');
      canguro.addEventListener('animationend', () => {
        canguro.remove();
        carrusel.classList.remove('d-none');
      });
    }
  
    // Validación form Operarios (HTML5 + mensajes accesorios)
    const form = document.getElementById('form-operario');
    if (form) {
      form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    }
  });
  
  async function insertarParcial(selector, url) {
    const contenedor = document.querySelector(selector);
    if (!contenedor) return;
    try {
      const res = await fetch(url);
      contenedor.innerHTML = await res.text();
    } catch (err) {
      console.error('Error cargando parcial', url, err);
    }
  }
// Inserta cabecera y pie en todas las páginas
document.addEventListener("DOMContentLoaded", async () => {
  await insertarParcial("#cabecera", "partials/cabezera.html");
  await insertarParcial("#pie", "partials/pie.html");

  // Página Animales: animación canguro y carrusel
  const canguro = document.getElementById("canguro-saltarin");
  const carrusel = document.getElementById("carrusel-animales");
  if (canguro && carrusel) {
    canguro.classList.add("canguro-activo");
    canguro.addEventListener("animationend", () => {
      canguro.remove();
      carrusel.classList.remove("d-none");
    });
  }

  // Validación form Operarios (HTML5 + mensajes accesorios)
  const form = document.getElementById("form-operario");
  if (form) {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  }
});

// Circuit Breaker simple para fetch parciales
const circuitBreakerState = {
  failures: 0,
  lastFailure: 0,
  open: false,
  timeout: 3000,      // milisegundos para pasar a HALF-OPEN
  failureThreshold: 3 // Nº de intentos fallidos antes de abrir el circuito
};

async function insertarParcial(selector, url) {
  const contenedor = document.querySelector(selector);
  if (!contenedor) return;

  const now = Date.now();

  // Si circuito abierto, verificar si puede pasar a "half-open"
  if (circuitBreakerState.open) {
    if (now - circuitBreakerState.lastFailure > circuitBreakerState.timeout) {
      circuitBreakerState.open = false; // half-open simplificado: intentamos
    } else {
      console.warn(`Circuit breaker abierto para ${url}, omitiendo fetch`);
      contenedor.innerHTML =
        '<div class="alert alert-warning">Temporalmente sin conexión al servidor. Intente más tarde.</div>';
      return;
    }
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    contenedor.innerHTML = await res.text();
    // Éxito: resetear el contador de fallos
    circuitBreakerState.failures = 0;
    circuitBreakerState.open = false;
  } catch (err) {
    circuitBreakerState.failures++;
    circuitBreakerState.lastFailure = Date.now();
    if (circuitBreakerState.failures >= circuitBreakerState.failureThreshold) {
      circuitBreakerState.open = true;
      console.warn(`Circuit breaker activado para ${url}`);
    }
    console.error("Error cargando parcial", url, err);
    contenedor.innerHTML =
      '<div class="alert alert-danger">No se pudo cargar parte de la página. <button onclick="location.reload()">Reintentar</button></div>';
  }
}

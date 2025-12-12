import { wireUi } from './ui';

// Inicializar la UI cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', wireUi);
} else {
  wireUi();
}


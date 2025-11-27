import { Injectable, computed, signal } from '@angular/core';
import { Roca } from './roca';
import { Directrices } from './directrices';

/**
 * Servicio de estado para gestionar las rocas de la misión.
 *
 * - pendientes: rocas que todavía no se han validado.
 * - validas:    rocas que cumplen las directrices.
 * - fallidas:   rocas que NO cumplen las directrices.
 *
 * Usa Angular Signals para que los componentes se actualicen de forma reactiva.
 */
@Injectable({
  providedIn: 'root',
})
export class RocasStore {

  // --- Estado interno (privado) ---
  private readonly _pendientes = signal<Roca[]>([]);
  private readonly _validas    = signal<Roca[]>([]);
  private readonly _fallidas   = signal<Roca[]>([]);

  // --- Selectores públicos (solo lectura) ---
  /** Lista de rocas pendientes de validación. */
  readonly pendientes = computed(() => this._pendientes());

  /** Lista de rocas que han superado la validación. */
  readonly validas    = computed(() => this._validas());

  /** Lista de rocas que NO han superado la validación. */
  readonly fallidas   = computed(() => this._fallidas());

  /** Añade una nueva roca a la cola de pendientes. */
  addPendiente(roca: Roca): void {
    this._pendientes.update(lista => [...lista, roca]);
  }

  /**
   * Intenta validar una roca a partir de su id.
   *
   * - La roca se busca en la lista de pendientes.
   * - Si se encuentra:
   *   - se elimina de pendientes
   *   - se evalúa con Directrices.analiza()
   *   - se añade a 'validas' o 'fallidas' según el resultado.
   */
  validarPorId(id: string, directriz: Directrices): void {
    const roca = this._pendientes().find(r => r.id === id);
    if (!roca) {
      // Si el id no existe en pendientes, no hacemos nada.
      // El componente que llama puede mostrar un mensaje de error si quiere.
      return;
    }

    // 1) Sacamos la roca de pendientes
    this._pendientes.update(lista => lista.filter(r => r.id !== id));

    // 2) Analizamos la roca con las directrices de la misión
    const esValida = directriz.analiza(roca);

    // 3) La movemos a la lista correspondiente
    if (esValida) {
      this._validas.update(lista => [...lista, roca]);
    } else {
      this._fallidas.update(lista => [...lista, roca]);
    }
  }

  /** Limpia todo el estado (por si quieres reiniciar la misión). */
  reset(): void {
    this._pendientes.set([]);
    this._validas.set([]);
    this._fallidas.set([]);
  }
}

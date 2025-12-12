// src/domain/militaryElement.ts

/**
 * Elemento militar genérico que puede ser una unidad individual,
 * una división o un ejército completo (Composite).
 */
export interface MilitaryElement {
    getNombre(): string;
  
    /**
     * Precio total en euros de este elemento (unidad o composición).
     */
    getPrecio(): number;
  
    /**
     * Potencia de fuego total (suma de todas las unidades internas si aplica).
     */
    getPotenciaFuegoTotal(): number;
  
    /**
     * Blindaje total (suma o agregación según el modelo de negocio).
     */
    getBlindajeTotal(): number;
  
    /**
     * Capacidad de movimiento total del elemento.
     */
    getMovimientoTotal(): number;
  
    /**
     * Número de elementos básicos (unidades) que contiene.
     * Para una unidad individual será 1.
     * Para un ejército compuesto, será la suma de todas sus unidades.
     */
    getNumeroElementos(): number;
  }
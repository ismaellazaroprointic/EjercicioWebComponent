// src/domain/capabilities.ts

/**
 * Capacidad de destrucción (Potencia de fuego).
 */
export interface IDestructor {
    capacidadDeDestruccion(): number;
  }
  
  /**
   * Capacidad de movimiento (velocidad o movilidad).
   */
  export interface IMovil {
    capacidadDeMovimiento(): number;
  }
  
  /**
   * Capacidad de resistencia al ataque enemigo (blindaje / defensa).
   */
  export interface IBlindado {
    resistenciaAlAtaque(): number;
  }
  
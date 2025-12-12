export class BudgetExceededError extends Error {
    constructor(
      message: string,
      public readonly details: { fondoMaximo: number; gastoActual: number; precioNuevo: number }
    ) {
      super(message);
      this.name = 'BudgetExceededError';
    }
  }
  
  export class NotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'NotFoundError';
    }
  }
  
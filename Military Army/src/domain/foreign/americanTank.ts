// src/domain/foreign/americanTank.ts
export interface AmericanTank {
    getModelName(): string;
  
    /** velocidad en millas por hora */
    getSpeedMph(): number;
  
    /** blindaje en “puntos” (lo tratamos igual que el nuestro) */
    getArmor(): number;
  
    /** potencia de fuego en “puntos” */
    getFirePower(): number;
  
    /** precio en dólares (para simplificar: lo asumimos ya en euros o 1:1) */
    getCost(): number;
  }
  
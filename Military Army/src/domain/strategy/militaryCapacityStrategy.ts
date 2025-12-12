export type MilitaryTotals = {
    potenciaFuegoTotal: number;
    movimientoTotal: number;
    blindajeTotal: number;
  };
  
  export interface MilitaryCapacityStrategy {
    calcularCM(totals: MilitaryTotals): number;
  }
  
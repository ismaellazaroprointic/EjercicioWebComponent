import { MilitaryCapacityStrategy, MilitaryTotals } from './militaryCapacityStrategy';

export class DefaultMilitaryCapacityStrategy implements MilitaryCapacityStrategy {
  calcularCM({ potenciaFuegoTotal, movimientoTotal, blindajeTotal }: MilitaryTotals): number {
    const denom = 100 - blindajeTotal;
    if (denom <= 0) {
      throw new RangeError(
        `CM inválida: (100 - blindajeTotal) debe ser > 0. blindajeTotal=${blindajeTotal}`
      );
    }
    return (potenciaFuegoTotal * (movimientoTotal / 2)) / denom;
  }
}

// src/domain/adapters/marshallTankAdapter.ts
import { MilitaryElement } from '../militaryElement';
import { IBlindado, IDestructor, IMovil } from '../capabilities';
import { AmericanTank } from '../foreign/americanTank';

export class MarshallTankAdapter
  implements MilitaryElement, IMovil, IBlindado, IDestructor
{
  constructor(private readonly tank: AmericanTank) {}

  private mphToKmh(mph: number): number {
    return mph * 1.60934;
  }

  getNombre(): string {
    return this.tank.getModelName();
  }

  getPrecio(): number {
    return this.tank.getCost();
  }

  getPotenciaFuegoTotal(): number {
    return this.tank.getFirePower();
  }

  getBlindajeTotal(): number {
    return this.tank.getArmor();
  }

  getMovimientoTotal(): number {
    return this.mphToKmh(this.tank.getSpeedMph());
  }

  getNumeroElementos(): number {
    return 1;
  }

  // Interfaces “capabilities”
  capacidadDeDestruccion(): number {
    return this.getPotenciaFuegoTotal();
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  resistenciaAlAtaque(): number {
    return this.getBlindajeTotal();
  }
}

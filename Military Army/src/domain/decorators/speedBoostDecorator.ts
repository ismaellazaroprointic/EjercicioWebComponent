import { ElementDecorator } from './elementDecorator';
import { IMovil } from '../capabilities';
import { MilitaryElement } from '../militaryElement';

export class SpeedBoostDecorator extends ElementDecorator implements IMovil {
  constructor(base: MilitaryElement) {
    super(base);
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  override getMovimientoTotal(): number {
    return this.base.getMovimientoTotal() * 1.3;
  }
}

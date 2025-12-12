import { ElementDecorator } from './elementDecorator';
import { IBlindado } from '../capabilities';
import { MilitaryElement } from '../militaryElement';

export class ArmorBoostDecorator extends ElementDecorator implements IBlindado {
  constructor(base: MilitaryElement) {
    super(base);
  }

  resistenciaAlAtaque(): number {
    return this.getBlindajeTotal();
  }

  override getBlindajeTotal(): number {
    return this.base.getBlindajeTotal() * 1.3;
  }
}

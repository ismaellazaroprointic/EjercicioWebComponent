import { MilitaryElement } from '../militaryElement';

export abstract class ElementDecorator implements MilitaryElement {
  protected constructor(protected readonly base: MilitaryElement) {}

  /** Necesario para serialización (IndexedDB) */
  getWrapped(): MilitaryElement {
    return this.base;
  }

  getNombre(): string {
    return this.base.getNombre();
  }

  getPrecio(): number {
    return this.base.getPrecio();
  }

  getPotenciaFuegoTotal(): number {
    return this.base.getPotenciaFuegoTotal();
  }

  getBlindajeTotal(): number {
    return this.base.getBlindajeTotal();
  }

  getMovimientoTotal(): number {
    return this.base.getMovimientoTotal();
  }

  getNumeroElementos(): number {
    return this.base.getNumeroElementos();
  }
}

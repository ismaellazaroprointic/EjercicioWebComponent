import { MilitaryElement } from './militaryElement';
import { MilitaryCapacityStrategy } from './strategy/militaryCapacityStrategy';
import { BudgetExceededError } from './errors';
import { createId } from './utils/id';

export class Army implements MilitaryElement {
  private elements: MilitaryElement[] = [];
  private readonly id: string;
  private readonly fondoMaximo: number | undefined;

  constructor(nombre: string, options?: { id?: string; fondoMaximo?: number }) {
    this.nombre = nombre;
    this.id = options?.id ?? createId('army');
    this.fondoMaximo = options?.fondoMaximo ?? undefined;
  }

  private readonly nombre: string;

  getId(): string {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getFondoMaximo(): number | undefined {
    return this.fondoMaximo;
  }

  addElement(element: MilitaryElement): void {
    if (this.fondoMaximo !== undefined) {
      const gastoActual = this.getPrecio();
      const precioNuevo = element.getPrecio();
      if (gastoActual + precioNuevo > this.fondoMaximo) {
        throw new BudgetExceededError('Fondo insuficiente para añadir el elemento', {
          fondoMaximo: this.fondoMaximo,
          gastoActual,
          precioNuevo,
        });
      }
    }
    this.elements.push(element);
  }

  removeElement(element: MilitaryElement): void {
    this.elements = this.elements.filter(e => e !== element);
  }

  getPrecio(): number {
    return this.elements.reduce((acc, el) => acc + el.getPrecio(), 0);
  }

  getPotenciaFuegoTotal(): number {
    return this.elements.reduce((acc, el) => acc + el.getPotenciaFuegoTotal(), 0);
  }

  getBlindajeTotal(): number {
    return this.elements.reduce((acc, el) => acc + el.getBlindajeTotal(), 0);
  }

  getMovimientoTotal(): number {
    return this.elements.reduce((acc, el) => acc + el.getMovimientoTotal(), 0);
  }

  getNumeroElementos(): number {
    return this.elements.reduce((acc, el) => acc + el.getNumeroElementos(), 0);
  }

  getCapacidadMilitar(strategy: MilitaryCapacityStrategy): number {
    return strategy.calcularCM({
      potenciaFuegoTotal: this.getPotenciaFuegoTotal(),
      movimientoTotal: this.getMovimientoTotal(),
      blindajeTotal: this.getBlindajeTotal(),
    });
  }
  getElements(): readonly MilitaryElement[] {
    return this.elements;
  }

}

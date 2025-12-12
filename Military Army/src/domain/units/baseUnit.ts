// src/domain/units/baseUnit.ts
import { MilitaryElement } from '../militaryElement';

export type UnitProps = {
  nombre: string;
  precio: number;
  velocidad: number;      // 0 si no aplica
  blindaje: number;       // 0 si no aplica
  potenciaFuego: number;  // 0 si no aplica
};

export abstract class BaseUnit implements MilitaryElement {
  protected readonly props: UnitProps;

  protected constructor(props: UnitProps) {
    this.props = { ...props };
  }

  getNombre(): string {
    return this.props.nombre;
  }

  getPrecio(): number {
    return this.props.precio;
  }

  getPotenciaFuegoTotal(): number {
    return this.props.potenciaFuego;
  }

  getBlindajeTotal(): number {
    return this.props.blindaje;
  }

  getMovimientoTotal(): number {
    return this.props.velocidad;
  }

  getNumeroElementos(): number {
    return 1;
  }
}

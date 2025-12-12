// src/domain/units/cavalry.ts
import { BaseUnit } from './baseUnit';
import { IBlindado, IDestructor, IMovil } from '../capabilities';

// Transporte: MX-7899
// Velocidad: 4.5 | Blindaje: 1.4 | Potencia de Fuego: 0 | Precio: 4200
export class TransporteMX7899 extends BaseUnit implements IMovil, IBlindado {
  constructor() {
    super({
      nombre: 'Transporte MX-7899',
      velocidad: 4.5,
      blindaje: 1.4,
      potenciaFuego: 0,
      precio: 4200,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  resistenciaAlAtaque(): number {
    return this.getBlindajeTotal();
  }
}

// Tanque de ataque Sombras-VB98
// Velocidad: 7.3 | Blindaje: 4.8 | Potencia de Fuego: 9.8 | Precio: 15600
export class TanqueSombrasVB98
  extends BaseUnit
  implements IMovil, IBlindado, IDestructor
{
  constructor() {
    super({
      nombre: 'Tanque de ataque Sombras-VB98',
      velocidad: 7.3,
      blindaje: 4.8,
      potenciaFuego: 9.8,
      precio: 15600,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }

  resistenciaAlAtaque(): number {
    return this.getBlindajeTotal();
  }

  capacidadDeDestruccion(): number {
    return this.getPotenciaFuegoTotal();
  }
}

// Transporte rápido TAXIN-66
// Velocidad: 12 | Blindaje: 0 | Potencia de Fuego: 0 | Precio: 1600
export class TransporteRapidoTaxin66 extends BaseUnit implements IMovil {
  constructor() {
    super({
      nombre: 'Transporte rápido TAXIN-66',
      velocidad: 12,
      blindaje: 0,
      potenciaFuego: 0,
      precio: 1600,
    });
  }

  capacidadDeMovimiento(): number {
    return this.getMovimientoTotal();
  }
}

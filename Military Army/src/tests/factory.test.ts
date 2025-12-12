// tests/factory.test.ts
import { DefaultUnitFactory } from '../domain/factory/defaultUnitFactory';
import { describe, it, expect } from '@jest/globals';

describe('Factory - DefaultUnitFactory', () => {
  it('crea unidades con nombres correctos', () => {
    const f = new DefaultUnitFactory();

    expect(f.createTransporteMX7899().getNombre()).toBe('Transporte MX-7899');
    expect(f.createTanqueSombrasVB98().getNombre()).toBe('Tanque de ataque Sombras-VB98');
    expect(f.createInfanteriaBasica().getNombre()).toBe('Infantería Básica');
    expect(f.createCanonAntiaereo().getNombre()).toBe('Cañón Antiaéreo');
  });

  it('crea Marshall Tank a través del Adapter', () => {
    const f = new DefaultUnitFactory();
    const marshall = f.createMarshallTank();

    expect(marshall.getNombre()).toBe('Marshall Tank');
    // nuestro movimiento ya debe venir en km/h (convertido)
    expect(marshall.getMovimientoTotal()).toBeGreaterThan(0);
  });
});

import { Army } from '../domain/army';
import { DefaultMilitaryCapacityStrategy } from '../domain/strategy/defaultMilitaryCapacityStrategy';
import { TransporteMX7899, TanqueSombrasVB98, InfanteriaBasica } from '../domain/units';
import { describe, it, expect } from '@jest/globals';

describe('Strategy - Cálculo de CM', () => {
  it('calcula CM según la fórmula (Pf * (Cm/2)) / (100 - Bl)', () => {
    const army = new Army('Alfa');
    army.addElement(new TransporteMX7899());   // mov 4.5, bl 1.4, pf 0
    army.addElement(new TanqueSombrasVB98());  // mov 7.3, bl 4.8, pf 9.8
    army.addElement(new InfanteriaBasica());   // mov 6,   bl 0,   pf 7

    // Totales:
    // Pf = 16.8, Cm = 17.8, Bl = 6.2
    // CM = (16.8 * (17.8/2)) / (100 - 6.2) = 1.5940298507...
    const strategy = new DefaultMilitaryCapacityStrategy();
    const cm = army.getCapacidadMilitar(strategy);

    expect(cm).toBeCloseTo(1.5940298507, 10);
  });

  it('lanza error si blindajeTotal >= 100', () => {
    const strategy = new DefaultMilitaryCapacityStrategy();
    expect(() =>
      strategy.calcularCM({ potenciaFuegoTotal: 10, movimientoTotal: 10, blindajeTotal: 100 })
    ).toThrow(RangeError);
  });
});

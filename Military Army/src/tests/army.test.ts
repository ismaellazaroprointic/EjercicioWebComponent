// tests/army.test.ts
import { Army } from '../domain/army';
import {
  TransporteMX7899,
  TanqueSombrasVB98,
  InfanteriaBasica,
} from '../domain/units/index';
import { describe, it, expect } from '@jest/globals';

describe('Army (Composite)', () => {
  it('calcula correctamente totales con varias unidades', () => {
    const army = new Army('Ejército Alfa');
    army.addElement(new TransporteMX7899());
    army.addElement(new TanqueSombrasVB98());
    army.addElement(new InfanteriaBasica());
    expect(army.getPotenciaFuegoTotal()).toBe(0 + 9.8 + 7);
    expect(army.getBlindajeTotal()).toBe(1.4 + 4.8 + 0);
    expect(army.getMovimientoTotal()).toBe(4.5 + 7.3 + 6);
  });
});

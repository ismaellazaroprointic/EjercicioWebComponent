import { TanqueSombrasVB98 } from '../domain/units';
import { SpeedBoostDecorator } from '../domain/decorators/speedBoostDecorator';
import { ArmorBoostDecorator } from '../domain/decorators/armorBoostDecorator';
import { describe, it, expect } from '@jest/globals';

describe('Decorators +30%', () => {
  it('SpeedBoostDecorator incrementa movimiento un 30%', () => {
    const base = new TanqueSombrasVB98(); // mov 7.3
    const boosted = new SpeedBoostDecorator(base);

    expect(boosted.getMovimientoTotal()).toBeCloseTo(7.3 * 1.3);
    // el resto no cambia
    expect(boosted.getBlindajeTotal()).toBeCloseTo(4.8);
    expect(boosted.getPotenciaFuegoTotal()).toBeCloseTo(9.8);
  });

  it('ArmorBoostDecorator incrementa blindaje un 30%', () => {
    const base = new TanqueSombrasVB98(); // bl 4.8
    const boosted = new ArmorBoostDecorator(base);

    expect(boosted.getBlindajeTotal()).toBeCloseTo(4.8 * 1.3);
    // el resto no cambia
    expect(boosted.getMovimientoTotal()).toBeCloseTo(7.3);
    expect(boosted.getPotenciaFuegoTotal()).toBeCloseTo(9.8);
  });

  it('se pueden encadenar ambos decoradores (velocidad y blindaje)', () => {
    const base = new TanqueSombrasVB98();
    const boosted = new ArmorBoostDecorator(new SpeedBoostDecorator(base));

    expect(boosted.getMovimientoTotal()).toBeCloseTo(7.3 * 1.3);
    expect(boosted.getBlindajeTotal()).toBeCloseTo(4.8 * 1.3);
    expect(boosted.getPotenciaFuegoTotal()).toBeCloseTo(9.8);
  });
});

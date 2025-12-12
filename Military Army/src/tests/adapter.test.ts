// tests/adapter.test.ts
import { MarshallTank } from '../domain/foreign/marshallTank';
import { MarshallTankAdapter } from '../domain/adapters/marshallTankAdapter';
import { describe, it, expect } from '@jest/globals';

describe('Adapter - Marshall Tank', () => {
  it('convierte mph a km/h en movimiento', () => {
    const american = new MarshallTank(); // speed 30 mph
    const adapted = new MarshallTankAdapter(american);

    // 30 mph -> 48.2802 km/h
    expect(adapted.getMovimientoTotal()).toBeCloseTo(30 * 1.60934, 5);

    // mapea resto de propiedades
    expect(adapted.getNombre()).toBe('Marshall Tank');
    expect(adapted.getBlindajeTotal()).toBe(8);
    expect(adapted.getPotenciaFuegoTotal()).toBe(18);
    expect(adapted.getPrecio()).toBe(25000);
  });
});

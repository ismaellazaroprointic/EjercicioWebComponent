// tests/sample.test.ts

import { describe, it, expect } from '@jest/globals';

describe('Entorno de pruebas', () => {
  it('debería ejecutar tests con Jest + TypeScript', () => {
    const suma = (a: number, b: number) => a + b;
    expect(suma(2, 3)).toBe(5);
  });
});

// tests/units.test.ts
import {
    TransporteMX7899,
    TanqueSombrasVB98,
    TransporteRapidoTaxin66,
    InfanteriaBasica,
    Ametrallador,
    Sanitario,
    CanonAntiaereo,
    TorpederoMovil,
    Canon,
} from '../domain/units';
import { describe, it, expect } from '@jest/globals';
  
  describe('Unidades militares', () => {
    it('Transporte MX-7899 tiene las propiedades correctas', () => {
      const unidad = new TransporteMX7899();
      expect(unidad.getNombre()).toBe('Transporte MX-7899');
      expect(unidad.getMovimientoTotal()).toBeCloseTo(4.5);
      expect(unidad.getBlindajeTotal()).toBeCloseTo(1.4);
      expect(unidad.getPotenciaFuegoTotal()).toBe(0);
      expect(unidad.getPrecio()).toBe(4200);
      expect(unidad.getNumeroElementos()).toBe(1);
    });
  
    it('Tanque Sombras-VB98 tiene potencia de fuego y blindaje correctos', () => {
      const unidad = new TanqueSombrasVB98();
      expect(unidad.getMovimientoTotal()).toBeCloseTo(7.3);
      expect(unidad.getBlindajeTotal()).toBeCloseTo(4.8);
      expect(unidad.getPotenciaFuegoTotal()).toBeCloseTo(9.8);
      expect(unidad.getPrecio()).toBe(15600);
    });
  
    it('Sanitario tiene blindaje y sin potencia de fuego', () => {
      const unidad = new Sanitario();
      expect(unidad.getMovimientoTotal()).toBe(7);
      expect(unidad.getBlindajeTotal()).toBe(5);
      expect(unidad.getPotenciaFuegoTotal()).toBe(0);
    });
  
    it('Cañón Antiaéreo tiene potencia de fuego 22', () => {
      const unidad = new CanonAntiaereo();
      expect(unidad.getPotenciaFuegoTotal()).toBe(22);
    });
  
    it('Cañón fijo no se mueve y tiene potencia 14', () => {
      const unidad = new Canon();
      expect(unidad.getMovimientoTotal()).toBe(0);
      expect(unidad.getPotenciaFuegoTotal()).toBe(14);
    });
  });
  
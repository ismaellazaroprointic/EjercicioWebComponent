// src/domain/factory/unitFactory.ts
import { MilitaryElement } from '../militaryElement';

export interface UnitFactory {
  // Caballería
  createTransporteMX7899(): MilitaryElement;
  createTanqueSombrasVB98(): MilitaryElement;
  createTransporteRapidoTaxin66(): MilitaryElement;

  // Infantería
  createInfanteriaBasica(): MilitaryElement;
  createAmetrallador(): MilitaryElement;
  createSanitario(): MilitaryElement;

  // Artillería
  createCanonAntiaereo(): MilitaryElement;
  createTorpederoMovil(): MilitaryElement;
  createCanon(): MilitaryElement;

  // Extra
  createMarshallTank(): MilitaryElement;
}

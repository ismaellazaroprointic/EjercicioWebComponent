// src/domain/factory/defaultUnitFactory.ts
import { UnitFactory } from './unitFactory';
import { MilitaryElement } from '../militaryElement';
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
} from '../units';
import { MarshallTank } from '../foreign/marshallTank';
import { MarshallTankAdapter } from '../adapters/marshallTankAdapter';

export class DefaultUnitFactory implements UnitFactory {
  createTransporteMX7899(): MilitaryElement {
    return new TransporteMX7899();
  }

  createTanqueSombrasVB98(): MilitaryElement {
    return new TanqueSombrasVB98();
  }

  createTransporteRapidoTaxin66(): MilitaryElement {
    return new TransporteRapidoTaxin66();
  }

  createInfanteriaBasica(): MilitaryElement {
    return new InfanteriaBasica();
  }

  createAmetrallador(): MilitaryElement {
    return new Ametrallador();
  }

  createSanitario(): MilitaryElement {
    return new Sanitario();
  }

  createCanonAntiaereo(): MilitaryElement {
    return new CanonAntiaereo();
  }

  createTorpederoMovil(): MilitaryElement {
    return new TorpederoMovil();
  }

  createCanon(): MilitaryElement {
    return new Canon();
  }

  createMarshallTank(): MilitaryElement {
    return new MarshallTankAdapter(new MarshallTank());
  }
}

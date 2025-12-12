import { UnitResolver } from './unitResolver';
import { DefaultUnitFactory } from './defaultUnitFactory';
import { MilitaryElement } from '../militaryElement';

export class DefaultUnitResolver implements UnitResolver {
  constructor(private readonly factory = new DefaultUnitFactory()) {}

  createByName(name: string): MilitaryElement {
    switch (name) {
      // Caballería
      case 'Transporte MX-7899': return this.factory.createTransporteMX7899();
      case 'Tanque de ataque Sombras-VB98': return this.factory.createTanqueSombrasVB98();
      case 'Transporte rápido TAXIN-66': return this.factory.createTransporteRapidoTaxin66();

      // Infantería
      case 'Infantería Básica': return this.factory.createInfanteriaBasica();
      case 'Ametrallador': return this.factory.createAmetrallador();
      case 'Sanitario': return this.factory.createSanitario();

      // Artillería
      case 'Cañón Antiaéreo': return this.factory.createCanonAntiaereo();
      case 'Torpedero móvil': return this.factory.createTorpederoMovil();
      case 'Cañón': return this.factory.createCanon();

      // Extra
      case 'Marshall Tank': return this.factory.createMarshallTank();

      default:
        throw new Error(`Unidad desconocida para resolver: "${name}"`);
    }
  }
}

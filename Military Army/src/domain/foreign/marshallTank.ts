// src/domain/foreign/marshallTank.ts
import { AmericanTank } from './americanTank';

export class MarshallTank implements AmericanTank {
  getModelName(): string {
    return 'Marshall Tank';
  }

  // Ejemplo (tú puedes decidir números). Importante: speed está en MPH.
  getSpeedMph(): number {
    return 30; // mph
  }

  getArmor(): number {
    return 8;
  }

  getFirePower(): number {
    return 18;
  }

  getCost(): number {
    return 25000;
  }
}

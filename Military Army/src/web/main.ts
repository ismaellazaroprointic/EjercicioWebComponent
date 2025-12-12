import { ArmyService } from '../app/armyService';
import { DefaultMilitaryCapacityStrategy } from '../domain/strategy/defaultMilitaryCapacityStrategy';
import { IndexedDbArmyRepository } from '../infra/indexeddb/indexedDbArmyRepository';
import { DefaultUnitResolver } from '../domain/factory/defaultUnitResolver';

// Composition root: construyes dependencias UNA vez
export const armyService = new ArmyService(
  new IndexedDbArmyRepository(new DefaultUnitResolver()),
  new DefaultMilitaryCapacityStrategy()
);

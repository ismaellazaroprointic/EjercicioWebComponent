import { MilitaryElement } from '../militaryElement';

export interface UnitResolver {
  createByName(name: string): MilitaryElement;
}

import { Army } from '../domain/army';

export interface ArmyRepository {
  save(army: Army): Promise<void>;
  findById(id: string): Promise<Army | null>;
  findAll(): Promise<Army[]>;
  delete(id: string): Promise<void>;
}

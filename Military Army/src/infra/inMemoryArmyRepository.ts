import { ArmyRepository } from './armyRepository';
import { Army } from '../domain/army';

export class InMemoryArmyRepository implements ArmyRepository {
  private readonly store = new Map<string, Army>();

  async save(army: Army): Promise<void> {
    this.store.set(army.getId(), army);
  }

  async findById(id: string): Promise<Army | null> {
    return this.store.get(id) ?? null;
  }

  async findAll(): Promise<Army[]> {
    return Array.from(this.store.values());
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }
}

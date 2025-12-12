import { InMemoryArmyRepository } from '../infra/inMemoryArmyRepository';
import { Army } from '../domain/army';
import { describe, it, expect } from '@jest/globals';

describe('InMemoryArmyRepository', () => {
  it('guarda y recupera ejércitos', async () => {
    const repo = new InMemoryArmyRepository();
    const a = new Army('A');
    const b = new Army('B');

    await repo.save(a);
    await repo.save(b);

    const all = await repo.findAll();
    expect(all).toHaveLength(2);

    const found = await repo.findById(a.getId());
    expect(found?.getNombre()).toBe('A');
  });

  it('borra ejércitos', async () => {
    const repo = new InMemoryArmyRepository();
    const a = new Army('A');
    await repo.save(a);

    await repo.delete(a.getId());
    expect(await repo.findById(a.getId())).toBeNull();
  });
});

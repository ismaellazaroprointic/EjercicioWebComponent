import 'fake-indexeddb/auto';

import { IndexedDbArmyRepository } from '../infra/indexeddb/indexedDbArmyRepository';
import { DefaultUnitResolver } from '../domain/factory/defaultUnitResolver';
import { Army } from '../domain/army';
import { DefaultUnitFactory } from '../domain/factory/defaultUnitFactory';
import { ArmorBoostDecorator } from '../domain/decorators/armorBoostDecorator';
import { SpeedBoostDecorator } from '../domain/decorators/speedBoostDecorator';
import { describe, it, expect } from '@jest/globals';

describe('IndexedDbArmyRepository', () => {
  it('guarda y reconstruye un ejército con decoradores y Marshall Tank', async () => {
    const resolver = new DefaultUnitResolver();
    const repo = new IndexedDbArmyRepository(resolver, {
      dbName: 'test_db',
      storeName: 'armies',
      version: 1,
    });

    const factory = new DefaultUnitFactory();

    const army = new Army('Gamma', { fondoMaximo: 999999, id: 'army_fixed_id' });

    // Unidad normal
    army.addElement(factory.createInfanteriaBasica());

    // Unidad con decoradores encadenados
    const tank = factory.createTanqueSombrasVB98();
    const boostedTank = new ArmorBoostDecorator(new SpeedBoostDecorator(tank));
    army.addElement(boostedTank);

    // Marshall (Adapter)
    army.addElement(factory.createMarshallTank());

    await repo.save(army);

    const loaded = await repo.findById('army_fixed_id');
    expect(loaded).not.toBeNull();

    if (!loaded) return;

    expect(loaded.getNombre()).toBe('Gamma');
    expect(loaded.getNumeroElementos()).toBe(3);

    // Comprobamos stats agregadas coherentes
    expect(loaded.getPotenciaFuegoTotal()).toBeCloseTo(
      army.getPotenciaFuegoTotal(),
      8
    );

    // Ojo: el blindaje/movimiento deben reflejar el +30% del tanque decorado
    expect(loaded.getBlindajeTotal()).toBeCloseTo(army.getBlindajeTotal(), 8);
    expect(loaded.getMovimientoTotal()).toBeCloseTo(army.getMovimientoTotal(), 8);

    // Precio debería coincidir (decoradores no cambian precio en nuestro modelo)
    expect(loaded.getPrecio()).toBeCloseTo(army.getPrecio(), 8);
  });

  it('findAll devuelve todos los ejércitos guardados', async () => {
    const resolver = new DefaultUnitResolver();
    const repo = new IndexedDbArmyRepository(resolver, {
      dbName: 'test_db_2',
      storeName: 'armies',
      version: 1,
    });

    const a1 = new Army('A', { id: 'a1' });
    const a2 = new Army('B', { id: 'a2' });

    await repo.save(a1);
    await repo.save(a2);

    const all = await repo.findAll();
    const names = all.map(a => a.getNombre()).sort();
    expect(names).toEqual(['A', 'B']);
  });

  it('delete elimina un ejército', async () => {
    const resolver = new DefaultUnitResolver();
    const repo = new IndexedDbArmyRepository(resolver, {
      dbName: 'test_db_3',
      storeName: 'armies',
      version: 1,
    });

    const a = new Army('Z', { id: 'z1' });
    await repo.save(a);

    await repo.delete('z1');
    expect(await repo.findById('z1')).toBeNull();
  });
});

import { InMemoryArmyRepository } from '../infra/inMemoryArmyRepository';
import { ArmyService } from '../app/armyService';
import { DefaultMilitaryCapacityStrategy } from '../domain/strategy/defaultMilitaryCapacityStrategy';
import { DefaultUnitFactory } from '../domain/factory/defaultUnitFactory';
import { BudgetExceededError, NotFoundError } from '../domain/errors';
import { describe, it, expect } from '@jest/globals';

describe('ArmyService', () => {
  it('crea ejército, añade unidades y devuelve stats', async () => {
    const repo = new InMemoryArmyRepository();
    const service = new ArmyService(repo, new DefaultMilitaryCapacityStrategy());
    const factory = new DefaultUnitFactory();

    const army = await service.createArmy('Alfa');
    await service.addElement(army.getId(), factory.createTransporteMX7899());
    await service.addElement(army.getId(), factory.createTanqueSombrasVB98());
    await service.addElement(army.getId(), factory.createInfanteriaBasica());

    const stats = await service.getStats(army.getId());

    expect(stats.nombre).toBe('Alfa');
    expect(stats.elementos).toBe(3);
    expect(stats.gasto).toBe(4200 + 15600 + 250);
    expect(stats.potenciaFuego).toBeCloseTo(16.8);
    expect(stats.blindaje).toBeCloseTo(6.2);
    expect(stats.movimiento).toBeCloseTo(17.8);
    expect(stats.capacidadMilitar).toBeCloseTo(1.5940298507, 10);
  });

  it('aplica fondo máximo y bloquea si se excede', async () => {
    const repo = new InMemoryArmyRepository();
    const service = new ArmyService(repo, new DefaultMilitaryCapacityStrategy());
    const factory = new DefaultUnitFactory();

    const army = await service.createArmy('Beta', 5000);
    await service.addElement(army.getId(), factory.createTransporteMX7899()); // 4200 OK

    // Tanque cuesta 15600 => excede
    await expect(service.addElement(army.getId(), factory.createTanqueSombrasVB98()))
      .rejects
      .toBeInstanceOf(BudgetExceededError);
  });

  it('lanza NotFoundError si no existe el ejército', async () => {
    const repo = new InMemoryArmyRepository();
    const service = new ArmyService(repo, new DefaultMilitaryCapacityStrategy());

    await expect(service.getStats('nope')).rejects.toBeInstanceOf(NotFoundError);
  });
});

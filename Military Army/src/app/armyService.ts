import { Army } from '../domain/army';
import { MilitaryElement } from '../domain/militaryElement';
import { MilitaryCapacityStrategy } from '../domain/strategy/militaryCapacityStrategy';
import { ArmyRepository } from '../infra/armyRepository';
import { NotFoundError } from '../domain/errors';

export type ArmyStats = {
  id: string;
  nombre: string;
  elementos: number;
  potenciaFuego: number;
  blindaje: number;
  movimiento: number;
  gasto: number;
  fondoMaximo?: number;
  capacidadMilitar: number;
};

export class ArmyService {
  constructor(
    private readonly repo: ArmyRepository,
    private readonly cmStrategy: MilitaryCapacityStrategy
  ) {}

  async createArmy(nombre: string, fondoMaximo?: number): Promise<Army> {
    const army = new Army(nombre, { fondoMaximo: fondoMaximo ?? undefined as unknown as number });
    await this.repo.save(army);
    return army;
  }

  async addElement(armyId: string, element: MilitaryElement): Promise<void> {
    const army = await this.getArmyOrThrow(armyId);
    army.addElement(element);
    await this.repo.save(army);
  }

  async getStats(armyId: string): Promise<ArmyStats> {
    const army = await this.getArmyOrThrow(armyId);

    return {
      id: army.getId(),
      nombre: army.getNombre(),
      elementos: army.getNumeroElementos(),
      potenciaFuego: army.getPotenciaFuegoTotal(),
      blindaje: army.getBlindajeTotal(),
      movimiento: army.getMovimientoTotal(),
      gasto: army.getPrecio(),
      fondoMaximo: army.getFondoMaximo() ?? undefined as unknown as number,
      capacidadMilitar: army.getCapacidadMilitar(this.cmStrategy),
    };
  }

  async listArmies(): Promise<Army[]> {
    return this.repo.findAll();
  }

  async deleteArmy(armyId: string): Promise<void> {
    await this.repo.delete(armyId);
  }

  private async getArmyOrThrow(id: string): Promise<Army> {
    const army = await this.repo.findById(id);
    if (!army) throw new NotFoundError(`Ejército no encontrado: ${id}`);
    return army;
  }
}

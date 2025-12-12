import { ArmyRepository } from '../armyRepository';
import { Army } from '../../domain/army';
import { ArmyRecord, DecoratorKey } from './armyRecord';
import { openDb, reqToPromise, txDone } from './idb';
import { UnitResolver } from '../../domain/factory/unitResolver';
import { MilitaryElement } from '../../domain/militaryElement';
import { ElementDecorator } from '../../domain/decorators/elementDecorator';
import { SpeedBoostDecorator } from '../../domain/decorators/speedBoostDecorator';
import { ArmorBoostDecorator } from '../../domain/decorators/armorBoostDecorator';

type Options = {
  dbName?: string;
  storeName?: string;
  version?: number;
};

export class IndexedDbArmyRepository implements ArmyRepository {
  private readonly dbName: string;
  private readonly storeName: string;
  private readonly version: number;

  constructor(private readonly unitResolver: UnitResolver, options?: Options) {
    this.dbName = options?.dbName ?? 'military_army_db';
    this.storeName = options?.storeName ?? 'armies';
    this.version = options?.version ?? 1;
  }

  async save(army: Army): Promise<void> {
    const db = await openDb(this.dbName, this.storeName, this.version);
    const tx = db.transaction(this.storeName, 'readwrite');
    const store = tx.objectStore(this.storeName);

    const record = this.toRecord(army);
    store.put(record);

    await txDone(tx);
    db.close();
  }

  async findById(id: string): Promise<Army | null> {
    const db = await openDb(this.dbName, this.storeName, this.version);
    const tx = db.transaction(this.storeName, 'readonly');
    const store = tx.objectStore(this.storeName);

    const record = await reqToPromise<ArmyRecord | undefined>(store.get(id));
    await txDone(tx);
    db.close();

    if (!record) return null;
    return this.fromRecord(record);
  }

  async findAll(): Promise<Army[]> {
    const db = await openDb(this.dbName, this.storeName, this.version);
    const tx = db.transaction(this.storeName, 'readonly');
    const store = tx.objectStore(this.storeName);

    const records = await reqToPromise<ArmyRecord[]>(store.getAll());
    await txDone(tx);
    db.close();

    return records.map(r => this.fromRecord(r));
  }

  async delete(id: string): Promise<void> {
    const db = await openDb(this.dbName, this.storeName, this.version);
    const tx = db.transaction(this.storeName, 'readwrite');
    const store = tx.objectStore(this.storeName);

    store.delete(id);

    await txDone(tx);
    db.close();
  }

  // -------- Serialización / Deserialización --------

  private toRecord(army: Army): ArmyRecord {
    const units = army.getElements().map(el => this.serializeElement(el));
    return {
      id: army.getId(),
      nombre: army.getNombre(),
      fondoMaximo: army.getFondoMaximo() ?? undefined as unknown as number,
      units,
    };
  }

  private fromRecord(record: ArmyRecord): Army {
    const army = new Army(record.nombre, { id: record.id, fondoMaximo: record.fondoMaximo ?? undefined as unknown as number });

    for (const u of record.units) {
      let element: MilitaryElement = this.unitResolver.createByName(u.baseName);

      // u.decorators está guardado en orden "outermost -> innermost" (según serialización)
      // Para reconstruir, aplicamos al revés (innermost primero)
      for (const d of [...u.decorators].reverse()) {
        element = this.applyDecorator(d, element);
      }

      army.addElement(element);
    }

    return army;
  }

  private applyDecorator(key: DecoratorKey, base: MilitaryElement): MilitaryElement {
    switch (key) {
      case 'speed30': return new SpeedBoostDecorator(base);
      case 'armor30': return new ArmorBoostDecorator(base);
      default: {
        const _exhaustive: never = key;
        return _exhaustive;
      }
    }
  }

  private serializeElement(element: MilitaryElement): { baseName: string; decorators: DecoratorKey[] } {
    const decorators: DecoratorKey[] = [];
    let current: MilitaryElement = element;

    while (current instanceof ElementDecorator) {
      if (current instanceof SpeedBoostDecorator) decorators.push('speed30');
      else if (current instanceof ArmorBoostDecorator) decorators.push('armor30');
      else throw new Error(`Decorador no soportado para persistencia: ${current.constructor.name}`);

      current = current.getWrapped();
    }

    // Aquí asumimos que el "leaf" se identifica por getNombre()
    const baseName = current.getNombre();
    return { baseName, decorators };
  }
}

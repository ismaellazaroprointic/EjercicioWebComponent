export type DecoratorKey = 'speed30' | 'armor30';

export type UnitRecord = {
  baseName: string;          // ej: "Tanque de ataque Sombras-VB98"
  decorators: DecoratorKey[]; // ej: ["speed30","armor30"]
};

export type ArmyRecord = {
  id: string;
  nombre: string;
  fondoMaximo?: number;
  units: UnitRecord[];
};

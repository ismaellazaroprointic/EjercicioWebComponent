import { Roca } from "../services/roca";

export interface IGuardable {
    guardarRoca(roca: Roca): Promise<number>;
    borrarRoca(id: string): Promise<void>;
    cogerTodasLasRocas(): Promise<Roca[]>;
}
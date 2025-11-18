import { Roca } from "../models/Roca";

export interface IGuardable {
    guardarRoca(roca: Roca): Promise<number>;
    borrarRoca(id: string): Promise<void>;
    cogerTodasLasRocas(): Promise<Roca[]>;
}
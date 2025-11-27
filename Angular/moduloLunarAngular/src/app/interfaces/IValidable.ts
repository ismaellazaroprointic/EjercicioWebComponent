import { Roca } from "../services/roca";

export interface IValidable {

    isValid(roca: Roca): boolean
}
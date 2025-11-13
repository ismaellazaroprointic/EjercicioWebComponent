import { Roca } from "../models/Roca"

export interface IValidable {

    isValid(roca: Roca): boolean
}
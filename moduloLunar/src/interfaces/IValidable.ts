import { Roca } from "../models/Roca.js"

export interface IValidable {

    isValid(roca: Roca): boolean
}
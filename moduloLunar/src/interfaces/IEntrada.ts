import { Roca } from "../models/Roca.js";

export interface IEntrada {

    /**
     * Convierte los datos provenientes de un formulario HTML
     * en una instancia válida de Roca.
     *
     * - EntradaExtendida: espera claves largas (con labels).
     * - EntradaReducida:  espera claves cortas (placeholders).
     */
    leer(datos: Record<string, unknown>): Roca;
}
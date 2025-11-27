import { Roca } from "../roca";
import { ISalida } from "../../interfaces/ISalida.js";

const OFFSET_KELVIN = 273.15;

export class SalidaAmericana implements ISalida{
    muestra(valido: boolean, roca: Roca): void{
        const elemento = document.querySelector<HTMLLIElement>(`li[data-roca-id="${roca.id}"]`);
        if (!elemento) {
            return;
        }
        let bloque = elemento.querySelector<HTMLDivElement>(".roca-card__validation");
        const temperaturaFahrenheit = ((roca.temperaturaFormacion - OFFSET_KELVIN) * 1.8 + 32).toFixed(2);
        if (!bloque) {
            bloque = document.createElement("div");
            bloque.className = "roca-card__validation";
            elemento.appendChild(bloque);
        }
        if(valido){
            bloque.innerHTML = `
                <p class="roca-card__temp">Temperatura estimada: ${temperaturaFahrenheit} °F</p>
                <p class="roca-card__status">Validada</p>
            `;
            elemento.classList.add("roca-card--validada");
        } else {
            bloque.innerHTML = `
                <p class="roca-card__temp">Temperatura estimada: ${temperaturaFahrenheit} °F</p>
                <p class="roca-card__status">Invalida</p>
            `;
            elemento.classList.add("roca-card--invalidada");
        }
    };
}
const OFFSET_KELVIN = 273.15;
export class SalidaEuropea {
    muestra(valido, roca) {
        const elemento = document.querySelector(`li[data-roca-id="${roca.id}"]`);
        if (!elemento) {
            return;
        }
        let bloque = elemento.querySelector(".roca-card__validation");
        const temperaturaCelsius = (roca.temperaturaFormacion - OFFSET_KELVIN).toFixed(2);
        if (!bloque) {
            bloque = document.createElement("div");
            bloque.className = "roca-card__validation";
            elemento.appendChild(bloque);
        }
        if (valido) {
            bloque.innerHTML = `
                <p class="roca-card__temp">Temperatura estimada: ${temperaturaCelsius} °C</p>
                <p class="roca-card__status">Validada</p>
            `;
            elemento.classList.add("roca-card--validada");
        }
        else {
            bloque.innerHTML = `
                <p class="roca-card__temp">Temperatura estimada: ${temperaturaCelsius} °C</p>
                <p class="roca-card__status">Invalida</p>
            `;
            elemento.classList.add("roca-card--invalidada");
        }
    }
    ;
}

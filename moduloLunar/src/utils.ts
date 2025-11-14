import { Roca } from "./models/Roca.js";

export function crearDescripcionDetallada(listaRocasHtml: HTMLElement,roca: Roca): void{
    const granoDesc = roca.tamañoGrano.desc ?? "sin dato";
    const li = document.createElement("li");
            li.className = "roca-card";
            li.dataset.rocaId = roca.id;
            li.innerHTML =
            `   <div class="roca-card__header">
                    <span class="roca-card__id">ID ${roca.id}</span>
                    <span class="roca-card__grupo">${roca.grupo}</span>
                </div>
                <h3 class="roca-card__nombre">${roca.nombre}</h3>
                <dl class="roca-card__stats">
                    <div>
                        <dt>Dureza</dt>
                        <dd>${roca.dureza} / 10</dd>
                    </div>
                    <div>
                        <dt>Grano</dt>
                        <dd>${granoDesc} (${roca.tamañoGrano.grado})</dd>
                    </div>
                    <div>
                        <dt>Cristales</dt>
                        <dd>${roca.tamañoCristales}</dd>
                    </div>
                    <div>
                        <dt>Temperatura</dt>
                        <dd>${roca.temperaturaFormacion} K</dd>
                    </div>
                </dl>
                <div class="roca-card__chips">
                    <span>${roca.clasificacion}</span>
                    <span>${roca.textura}</span>
                    <span>${roca.estructura}</span>
                </div>
            `;
            listaRocasHtml.appendChild(li);
}
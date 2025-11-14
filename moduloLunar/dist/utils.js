export function crearDescripcionDetallada(listaRocasHtml, roca) {
    var _a;
    const granoDesc = (_a = roca.tamañoGrano.desc) !== null && _a !== void 0 ? _a : "sin dato";
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

import { Astronauta } from "./models/Astronauta";
import { ValidadorMetamorfico } from "./validadores/ValidadorMetamorfico";
import { EntradaExtendida } from "./entradas/EntradaExtendida";
import { SalidaAmericana } from "./salidas/SalidaAmericana";
import { Mision } from "./models/Mision";
import { Roca } from "./models/Roca";
import { IPilotable } from "./interfaces/IPilotable";
import { IValidable } from "./interfaces/IValidable";
import { IEntrada } from "./interfaces/IEntrada";
import { ISalida } from "./interfaces/ISalida";


const piloto: IPilotable = new Astronauta("Pepito", "aeojogies", 45);
const misionMetamorfica: IValidable = new ValidadorMetamorfico();
const entradaRandom: IEntrada = new EntradaExtendida();
const salidaAmericana: ISalida = new SalidaAmericana();

const mision: Mision = new Mision(piloto, misionMetamorfica, entradaRandom, salidaAmericana);


// Obtenemos el formulario por su id
const formulario = document.getElementById("formulario");

if (formulario) {
    console.log("ILT: Hola");
    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        // Obtenemos los datos del formulario usando FormData
        const formData = new FormData(formulario as HTMLFormElement);
        // Convertimos a un objeto simple
        const datos: Record<string, unknown> = {};
        formData.forEach((valor, clave) => {
            datos[clave] = valor;
        });

        // Usamos la entrada configurada en la misión para crear una roca
        const roca = mision.entrada.leer(datos);
        console.log(roca);
        

        // Analiza la roca y muestra el resultado (por la salida)
        mision.analiza(roca);
    });
}

//Ya tengo la mision con todos sus componentes, falta crear una roca para analizarla. (que pereza con la de campos que tiene)

const rocaEjemplo: Roca = new Roca("00001", "as4547fd", "Metamorficas", 5, {grado: 1, desc: ""}, "Rocas ornamentales", 8, -50, "Una estructura robusta con matices azulados", "forma redonda y alargada", "Vitrea");

mision.analiza(rocaEjemplo);

//Tengo que hacer lo mismo que he hecho con los validadores (trasladar las necesidades de la interfaz a una clase) en las entradas y salidas. Las entradas tienen que seguir las especificaciones de la interfaz IEntrada y las salidas la de la interfaz ISalida.
//Me faltan las entradas, que no tengo claro que hacen ni para que sirven.

class Roca {

    id: string;
    nombre: string;
    grupo: "Igneas" | "Metamorficas" | "Sedimentarias";
    dureza: number;
    tamañoGrano: {grado: number, desc?: string};
    clasificacion: "Rocas de construccion" | "Rocas ornamentales" | "Rocas de uso en utensilios para el hombre" | "Piedras machacadas";
    tamañoCristales: number;
    temperaturaFormacion: number;
    estructura: string;
    formaGranos: string;
    textura: "Vitrea" | "Afanitica" | "Faneritica";


    constructor(id: string, nombre: string, grupo: "Igneas" | "Metamorficas" | "Sedimentarias", dureza: number, tamañoGrano: {grado: number, desc: string}, clasificacion:"Rocas de construccion" | "Rocas ornamentales" | "Rocas de uso en utensilios para el hombre" | "Piedras machacadas", tamañoCristales: number, temperaturaFormacion: number, estructura: string, formaGranos: string, textura: "Vitrea" | "Afanitica" | "Faneritica"){
        if (!/^[A-Za-z]{2}\d{4}[A-Za-z]{2}$/.test(nombre)) {
            throw new Error("El nombre debe tener el formato LLDDDDLL (2 letras, 4 números, 2 letras)");
        }
        if(tamañoGrano.grado < 2){
            tamañoGrano.desc = "fino";
        } else if(tamañoGrano.grado >= 2 && tamañoGrano.grado < 5){
            tamañoGrano.desc = "medio";
        } else if(tamañoGrano.grado >= 5 && tamañoGrano.grado <= 30) {
            tamañoGrano.desc = "grueso";
        } else if(tamañoGrano.grado > 30) {
            tamañoGrano.desc = "muy grueso";
        }

        if(dureza > 10 || dureza < 1) {
            throw new Error("La dureza tiene que estar entre el 1 y el 10 para estar abarcada dentro de la Escala de Mohs");
        }
        if(tamañoCristales > 10 || tamañoCristales < 0) {
            throw new Error("El tamaño del cristal tiene que estar entre 0 y 10");
        }
        if(temperaturaFormacion > 100 || temperaturaFormacion < -100){
            throw new Error("La temperatura de formacion tiene que estar entre -100 y 100 kelvin");
        }
        this.id = id;
        this.nombre = nombre;
        this.grupo = grupo;
        this.dureza = dureza;
        this.tamañoGrano = tamañoGrano;
        this.clasificacion = clasificacion;
        this.tamañoCristales = tamañoCristales;
        this.temperaturaFormacion = temperaturaFormacion;
        this.estructura = estructura;
        this.formaGranos = formaGranos;
        this.textura = textura;
    }
}
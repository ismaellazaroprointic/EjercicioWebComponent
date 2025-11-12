class ValidadorMetamorfico implements IValidable{

    isValid(roca: Roca): boolean {

        if(roca.grupo === "Metamorficas" && (roca.tamañoGrano.desc === "medio" || roca.tamañoGrano.desc === "fino") && roca.textura === "Vitrea"){
            return true;
        } else {
            return false;
        }
    }
}
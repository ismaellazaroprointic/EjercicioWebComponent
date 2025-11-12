class ValidadorIgneo implements IValidable{

    isValid(roca: Roca): boolean {

        if(roca.grupo === "Igneas" && roca.tamañoGrano.desc === "muy grueso"){
            return true;
        } else {
            return false;
        }
    }
}
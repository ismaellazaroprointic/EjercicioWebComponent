class ValidadorSedimentario implements IValidable{

    isValid(roca: Roca): boolean {

        if(roca.grupo === "Sedimentarias" && roca.textura == "Faneritica"){
            return true;
        } else {
            return false;
        }
    }
}
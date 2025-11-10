"use strict";
class Regalo {
    constructor(identificador, precioCompra, precioVenta) {
        const regex = /^[A-Z]{3}\d{4}$/;
        if (!regex.test(identificador)) {
            throw new Error("El identificador debe contener exactamente tres letras mayúsculas seguidas de cuatro números (ejemplo: ABC1234).");
        }
        if (Regalo.identificadoresUsados.has(identificador)) {
            throw new Error(`El identificador '${identificador}' ya está en uso.`);
        }
        Regalo.identificadoresUsados.add(identificador);
        this.identificador = identificador;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
    }
    getPrecioCompra() {
        return this.precioCompra;
    }
    getPrecioVenta() {
        return this.precioVenta;
    }
    setPrecioCompra(precioCompra) {
        this.precioCompra = precioCompra;
    }
    setPrecioVenta(precioVenta) {
        this.precioVenta = precioVenta;
    }
    beneficio() {
        return this.precioVenta - this.precioCompra;
    }
}
Regalo.identificadoresUsados = new Set();
class JarronMing extends Regalo {
    constructor(identificador) {
        super(identificador, 100, 200);
    }
}
class TazaMong extends Regalo {
    constructor(identificador) {
        super(identificador, 10, 22);
    }
}
class ColganteChulin extends Regalo {
    constructor(identificador) {
        super(identificador, 120, 140);
    }
}
function ordenarPorCompra(regalos) {
    return [...regalos].sort((a, b) => a.precioCompra - b.precioCompra);
}
function ordenarPorVenta(regalos) {
    return [...regalos].sort((a, b) => a.precioVenta - b.precioVenta);
}
function ordenarPorBeneficio(regalos) {
    return [...regalos].sort((a, b) => a.beneficio() - b.beneficio());
}
function aumentarIVA(regalos) {
    return regalos.map(regalo => {
        regalo.setPrecioCompra(regalo.getPrecioCompra() * 1.28);
        regalo.setPrecioVenta(regalo.getPrecioVenta() * 1.28);
        return regalo;
    });
}
const regalos = [
    new JarronMing("JAR0001"),
    new JarronMing("JAR0002"),
    new TazaMong("TAZ0001"),
    new TazaMong("TAZ0002"),
    new ColganteChulin("COL0001"),
    new ColganteChulin("COL0002")
];
let precioCompraTotal = 0;
let precioVentaTotal = 0;
let beneficioTotal = 0;
regalos.forEach(regalo => {
    precioCompraTotal += regalo.precioCompra;
    precioVentaTotal += regalo.precioVenta;
    beneficioTotal += regalo.beneficio();
});
console.log("El precio de compra total es: " + precioCompraTotal);
console.log("El precio de venta total es: " + precioVentaTotal);
console.log("El precio de compra medio es: " + (precioCompraTotal / regalos.length));
console.log("El precio de venta medio es: " + (precioVentaTotal / regalos.length));
console.log("El beneficio total es: " + beneficioTotal);
const regalosOrdenadosCompra = ordenarPorCompra(regalos);
const regalosOrdenadosVenta = ordenarPorVenta(regalos);
const regalosOrdenadosBeneficio = ordenarPorBeneficio(regalos);
regalosOrdenadosCompra.forEach(regalo => console.log(regalo));
regalosOrdenadosVenta.forEach(regalo => console.log(regalo));
regalosOrdenadosBeneficio.forEach(regalo => console.log(regalo));
const regalosCaros = aumentarIVA(regalos);
regalosCaros.forEach(regalo => console.log(regalo));
regalos.forEach(regalo => console.log("Estas viendo el elemento: " + regalo.identificador + "\nQue da un beneficio de: " + regalo.beneficio()));

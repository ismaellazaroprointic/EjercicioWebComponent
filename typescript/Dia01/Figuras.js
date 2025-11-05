var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura = /** @class */ (function () {
    function Figura(x, y) {
        if (x < 0) {
            this.x = 0;
        }
        else {
            this.x = x;
        }
        if (y < 0) {
            this.y = 0;
        }
        else {
            this.y = y;
        }
    }
    return Figura;
}());
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(x, y, lado) {
        var _this = _super.call(this, x, y) || this;
        _this.lado = lado;
        return _this;
    }
    Cuadrado.prototype.damePerimetro = function () {
        return this.lado * 4;
    };
    Cuadrado.prototype.dameSuperficie = function () {
        return this.lado * this.lado;
    };
    return Cuadrado;
}(Figura));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(x, y, radio) {
        var _this = _super.call(this, x, y) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.damePerimetro = function () {
        return 2 * Math.PI * this.radio;
    };
    Circulo.prototype.dameSuperficie = function () {
        return Math.PI * Math.pow(this.radio, 2);
    };
    Circulo.prototype.damePosicion = function () {
        return "Pos X: " + this.x + "Pos Y:" + this.y;
    };
    return Circulo;
}(Figura));
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(x, y, base, altura) {
        var _this = _super.call(this, x, y) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Rectangulo.prototype.damePerimetro = function () {
        return 2 * (this.base + this.altura);
    };
    Rectangulo.prototype.dameSuperficie = function () {
        return this.base * this.altura;
    };
    Rectangulo.prototype.damePosicion = function () {
        return "Pos X: " + this.x + "Pos Y:" + this.y;
    };
    return Rectangulo;
}(Figura));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(x, y, base, altura) {
        var _this = _super.call(this, x, y) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.damePerimetro = function () {
        return this.base + this.altura + this.base;
    };
    Triangulo.prototype.dameSuperficie = function () {
        return (this.base * this.altura) / 2;
    };
    Triangulo.prototype.damePosicion = function () {
        return "Pos X: " + this.x + "Pos Y:" + this.y;
    };
    return Triangulo;
}(Figura));
var miCuadrado1 = new Cuadrado(3, 3, 4);
var miCuadrado2 = new Cuadrado(5, 5, 7);
var miCirculo1 = new Circulo(5, 6, 5);
var miCirculo2 = new Circulo(7, 4, 3);
var miRectangulo1 = new Rectangulo(3, 3, 4, 5);
var miRectangulo2 = new Rectangulo(5, 5, 7, 3);
var miTriangulo1 = new Triangulo(3, 3, 4, 5);
var miTriangulo2 = new Triangulo(5, 5, 7, 3);
console.log("El cuadrado de lados 4, tiene un perimetro de ".concat(miCuadrado1.damePerimetro()));
console.log("El cuadrado de lados 4, tiene un area de ".concat(miCuadrado1.dameSuperficie()));
console.log("El cuadrado de lados 7, tiene un perimetro de ".concat(miCuadrado2.damePerimetro()));
console.log("El cuadrado de lados 7, tiene un area de ".concat(miCuadrado2.dameSuperficie()));
console.log("El circulo de radio 5, tiene un perimetro de ".concat(miCirculo1.damePerimetro()));
console.log("El circulo de radio 5, tiene un area de ".concat(miCirculo1.dameSuperficie()));
console.log("El circulo de radio 3, tiene un perimetro de ".concat(miCirculo2.damePerimetro()));
console.log("El circulo de radio 3, tiene un area de ".concat(miCirculo2.dameSuperficie()));
console.log("El rectangulo de base 4 y altura 5, tiene un perimetro de ".concat(miRectangulo1.damePerimetro()));
console.log("El rectangulo de base 4 y altura 5, tiene un area de ".concat(miRectangulo1.dameSuperficie()));
console.log("El rectangulo de base 7 y altura 3, tiene un perimetro de ".concat(miRectangulo2.damePerimetro()));
console.log("El rectangulo de base 7 y altura 3, tiene un area de ".concat(miRectangulo2.dameSuperficie()));
console.log("El triangulo de base 4 y altura 5, tiene un perimetro de ".concat(miTriangulo1.damePerimetro()));
console.log("El triangulo de base 4 y altura 5, tiene un area de ".concat(miTriangulo1.dameSuperficie()));
console.log("El triangulo de base 7 y altura 3, tiene un perimetro de ".concat(miTriangulo2.damePerimetro()));
console.log("El triangulo de base 7 y altura 3, tiene un area de ".concat(miTriangulo2.dameSuperficie()));

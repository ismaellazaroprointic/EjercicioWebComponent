const nombres01 : string[] = ["Andra", "Aneu", "Arlet", "Ehud", "Indivar", "Samay", "Sanca", "Tanit", "Uxia", "Zenda"];
const nombres02 : string[] = ["Abba", "Acfred", "Areu", "Drac", "Guim", "lol", "Kilian", "Mirt", "Yannick", "Zigor", "Tanit"];

function mostrarNombres(nombres: string[]): void {

    nombres.forEach(x => {

        console.log("Nombre: " + x); 
    });
    
}

function palindromo(nombres: string[]): string[] {

    let nombresRevertidos = nombres.map(nombre => {

        let nombreRevertido = "";

        for (let index = 0; index < nombre.length; index++) {
            
            nombreRevertido = nombre[index] + nombreRevertido;
        }

        return nombreRevertido;

    })

    return nombresRevertidos;
}

mostrarNombres(nombres01);
mostrarNombres(nombres02);

const todosMayorQueDos = nombres01.every(nombre => nombre.length > 2);
console.log("¿Todos los nombres en nombres01 tienen más de 2 caracteres?", todosMayorQueDos);

const filtradosNombres01 = nombres01.filter(nombre => nombre[0].toLowerCase() > 'i');
console.log("Nombres de nombres01 mayores que la 'i':", filtradosNombres01);

const filtradosNombres02 = nombres02.filter(nombre => nombre[0].toLowerCase() > 'i');
console.log("Nombres de nombres02 mayores que la 'i':", filtradosNombres02);

const nombres01Palindromo = palindromo(nombres01);
const nombres02Palindromo = palindromo(nombres02);

mostrarNombres(nombres01Palindromo);
mostrarNombres(nombres02Palindromo);

console.log(nombres01[nombres01.indexOf("Tanit")]);
console.log(nombres02[nombres02.indexOf("Tanit")]);

console.log(nombres01[nombres01.indexOf("jacinto")]);
console.log(nombres01[nombres01.indexOf("jacinto")]);

const nombres01Unidos = nombres01.join(", ");
console.log("nombres01 unidos:", nombres01Unidos);

const nombres02Unidos = nombres02.join(", ");
console.log("nombres02 unidos:", nombres02Unidos);

const longitudesNombres01 = nombres01.map(nombre => nombre.length);
console.log("Longitudes de los nombres en nombres01:", longitudesNombres01);

nombres01.pop();
nombres02.pop();

nombres01.push("Jacinto");
nombres02.push("Jacinto");

let runningTotal: number = 0;

for (let index = 0; index < longitudesNombres01.length; index++) {
    runningTotal += longitudesNombres01[index];
}

console.log("Running Total: " + runningTotal);

const subarrayNombres01 = nombres01.slice(1, 7);
const subarrayNombres02 = nombres02.slice(4, 6);
const nuevoArrayNombres = subarrayNombres01.concat(subarrayNombres02);

console.log("Subarray de nombres01 (elementos 1 a 7):", subarrayNombres01);
console.log("Subarray de nombres02 (elementos 4 a 6):", subarrayNombres02);
console.log("Nuevo array combinado de subarrays:", nuevoArrayNombres);

const algunoMayorQueSeisNombres01 = nombres01.some(nombre => nombre.length > 6);
console.log("¿Algún nombre en nombres01 tiene longitud mayor que 6?:", algunoMayorQueSeisNombres01);

const algunoMayorQueSeisNombres02 = nombres02.some(nombre => nombre.length > 6);
console.log("¿Algún nombre en nombres02 tiene longitud mayor que 6?:", algunoMayorQueSeisNombres02);

// Ordenar nombres01 de forma ascendente (A-Z)
const nombres01Asc = [...nombres01].sort();
console.log("nombres01 ordenados ascendentemente:", nombres01Asc);

// Ordenar nombres01 de forma descendente (Z-A)
const nombres01Desc = [...nombres01].sort().reverse();
console.log("nombres01 ordenados descendentemente:", nombres01Desc);

// Ordenar nombres02 de forma ascendente (A-Z)
const nombres02Asc = [...nombres02].sort();
console.log("nombres02 ordenados ascendentemente:", nombres02Asc);

// Ordenar nombres02 de forma descendente (Z-A)
const nombres02Desc = [...nombres02].sort().reverse();
console.log("nombres02 ordenados descendentemente:", nombres02Desc);

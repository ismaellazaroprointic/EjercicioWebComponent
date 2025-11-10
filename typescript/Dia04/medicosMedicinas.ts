class Paciente{

    nombre: string;
    edad: number;
    dni: string;

    constructor(nombre: string, edad: number, dni: string){

        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }

    mostrarInfo(): string {
        return "La informacion del paciente es la siguiente:\nNombre: " + this.nombre + "\nEdad: " + this.edad + "\nDNI: " + this.dni
    }
}

class PacienteConsulta extends Paciente {

    especialidad: string;

    constructor(nombre: string, edad: number, dni: string, especialidad: string){
        super(nombre, edad, dni);
        this.especialidad = especialidad;
    }

    mostrarInfo(): string {
        return super.mostrarInfo() + "\nEspecialidad: " + this.especialidad;
    }
}

class PacienteHospitalizado extends Paciente {

    diasHospitalizado: number;
    diagnostico: string;

    constructor(nombre: string, edad: number, dni: string, diasHospitalizado: number, diagnostico: string){
        super(nombre, edad, dni);
        this.diasHospitalizado = diasHospitalizado;
        this.diagnostico = diagnostico;
    }

    mostrarInfo(): string {
        return super.mostrarInfo() + "\nDias hospitalizado: " + this.diasHospitalizado + "\nDiagnostico: " + this.diagnostico;
    }
}


const pacientes: Paciente[] = [
    new PacienteConsulta("Ismael", 25, "432532325G", "Le duele la pierna por un esguince"),
    new PacienteHospitalizado("Pepito", 45, "43445432141K", 30, "Tuvo un accidente de coche y esta en coma"),
    new PacienteConsulta("Ana", 50, "23752905I", "Consulta ordinaria para donar sangre"),
    new PacienteHospitalizado("Rigoberta", 70, "4745904350N", 100, "Tiene demencia en estado avanzado")
]

pacientes.forEach(paciente => console.log(paciente.mostrarInfo() + "\n"));
"use strict";
class Paciente {
    constructor(nombre, edad, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
    mostrarInfo() {
        return "La informacion del paciente es la siguiente:\nNombre: " + this.nombre + "\nEdad: " + this.edad + "\nDNI: " + this.dni;
    }
}
class PacienteConsulta extends Paciente {
    constructor(nombre, edad, dni, especialidad) {
        super(nombre, edad, dni);
        this.especialidad = especialidad;
    }
    mostrarInfo() {
        return super.mostrarInfo() + "\nEspecialidad: " + this.especialidad;
    }
}
class PacienteHospitalizado extends Paciente {
    constructor(nombre, edad, dni, diasHospitalizado, diagnostico) {
        super(nombre, edad, dni);
        this.diasHospitalizado = diasHospitalizado;
        this.diagnostico = diagnostico;
    }
    mostrarInfo() {
        return super.mostrarInfo() + "\nDias hospitalizado: " + this.diasHospitalizado + "\nDiagnostico: " + this.diagnostico;
    }
}
const pacientes = [
    new PacienteConsulta("Ismael", 25, "432532325G", "Le duele la pierna por un esguince"),
    new PacienteHospitalizado("Pepito", 45, "43445432141K", 30, "Tuvo un accidente de coche y esta en coma"),
    new PacienteConsulta("Ana", 50, "23752905I", "Consulta ordinaria para donar sangre"),
    new PacienteHospitalizado("Rigoberta", 70, "4745904350N", 100, "Tiene demencia en estado avanzado")
];
pacientes.forEach(paciente => console.log(paciente.mostrarInfo() + "\n"));

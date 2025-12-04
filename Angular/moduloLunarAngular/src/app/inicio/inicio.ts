import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { IValidable } from '../interfaces/IValidable';
import { IEntrada } from '../interfaces/IEntrada';
import { ISalida } from '../interfaces/ISalida';
import { Entrada } from '../services/entrada';
import { Astronauta } from '../services/astronauta';
import { ValidadorIgneo } from '../services/validadores/ValidadorIgneo';
import { ValidadorMetamorfico } from '../services/validadores/ValidadorMetamorfico';
import { ValidadorSedimentario } from '../services/validadores/ValidadorSedimentario';
import { SalidaAmericana } from '../services/salidas/SalidaAmericana';
import { SalidaEuropea } from '../services/salidas/SalidaEuropea';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  id: string = '';
  nombre: string = '';
  apellidos: string = '';
  edad: number = 0;
  mision: string = '';
  entrada: IEntrada = new Entrada();
  idioma: string = '';

  constructor(private router: Router) {}

  enviar() {

    let misionEscogida: IValidable = new ValidadorIgneo();
    switch (this.mision) {
      case 'igneo':
        misionEscogida = new ValidadorIgneo();
        break;

      case 'metamorfico':
        misionEscogida = new ValidadorMetamorfico();
        break;

      case 'sedimentario':
        misionEscogida = new ValidadorSedimentario();
        break;
    
      default:
        break;
    }


  let salidaEscogida: ISalida;
  if(this.idioma === 'ingles'){
    salidaEscogida = new SalidaAmericana();
  } else {
    salidaEscogida = new SalidaEuropea();
  }

    this.router.navigate(['/mision'], {
      state: {
        piloto: new Astronauta(this.id, this.nombre.trim() + ' ' + this.apellidos, this.edad),
        mision: misionEscogida,
        entrada: this.entrada,
        salida: salidaEscogida,
      },
    });
  }
}

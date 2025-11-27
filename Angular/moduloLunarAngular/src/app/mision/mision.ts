import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Directrices } from '../services/directrices';
import { IValidable } from '../interfaces/IValidable';
import { IEntrada } from '../interfaces/IEntrada';
import { ISalida } from '../interfaces/ISalida';
import { Astronauta } from '../services/astronauta';

interface IMisionable {
  piloto:Astronauta;
  mision:IValidable;
  entrada:IEntrada;
  salida:ISalida;
}

@Component({
  selector: 'app-mision',
  standalone: true,
  templateUrl: './mision.html',
  styleUrl: './mision.css',
})
export class Mision {
  directriz!: Directrices;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const datos = nav?.extras.state as IMisionable;
    if(!datos) {
      throw new Error('No se recibieron datos en la navegacion')
    }
    this.directriz = new Directrices(datos.piloto, datos.mision, datos.entrada, datos.salida);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RocasFallidasComponent } from './rocas-fallidas/rocas-fallidas';
import { RocasValidasComponent } from './rocas-validas/rocas-validas';
import { RocasPendientesComponent } from './rocas-pendientes/rocas-pendientes';
import { RocaFormComponent } from './roca-form/roca-form';
import { ValidarRocaComponent } from './validar-roca/validar-roca';
import { Directrices } from '../services/directrices';
import { Astronauta } from '../services/astronauta';
import { IValidable } from '../interfaces/IValidable';
import { IEntrada } from '../interfaces/IEntrada';
import { ISalida } from '../interfaces/ISalida';

interface IMisionable {
  piloto:Astronauta;
  mision:IValidable;
  entrada:IEntrada;
  salida:ISalida;
}

@Component({
  selector: 'app-mision',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    RocaFormComponent,
    RocasPendientesComponent,
    ValidarRocaComponent,
    RocasFallidasComponent,
    RocasValidasComponent
  ],
  templateUrl: './mision.html',
  styleUrl: './mision.css',
})
export class Mision {
  directriz!: Directrices;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const datos = nav?.extras.state as IMisionable;
    // aquí creas tu Directrices con piloto, mision, entrada, salida
    this.directriz = new Directrices(
      datos.piloto,
      datos.mision,
      datos.entrada,
      datos.salida
    );
  }
}

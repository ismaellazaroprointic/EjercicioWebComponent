import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Mision } from './mision/mision';

export const routes: Routes = [
  { path: '', component: Inicio },      // pantalla inicial (formulario)
  { path: 'mision', component: Mision } // pantalla destino
];

// src/app/colores/colores.component.ts
import { Component } from '@angular/core';
import { Saludo } from '../saludo/saludo';

@Component({
  selector: 'app-colores',
  standalone: true,
  imports: [Saludo],
  templateUrl: './colores.html',
  styleUrl: './colores.css',
})
export class Colores {
  // color que se genera al crearse el componente
  backgroundColor: string = this.generarColorHex();

  // genera dos dígitos hex (00–ff)
  private generarRandom(): string {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  }

  // genera un #RRGGBB
  private generarColorHex(): string {
    return (
      '#' +
      this.generarRandom() +
      this.generarRandom() +
      this.generarRandom()
    );
  }
}

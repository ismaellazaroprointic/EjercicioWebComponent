// src/app/saludo/saludo.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],                      // 👈 vacío, no hace falta Colores aquí
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
})
export class Saludo {
  @Input() colorNombre: string = '';
}

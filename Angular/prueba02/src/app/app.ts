// src/app/app.component.ts
import { Component } from '@angular/core';
import { Colores } from './colores/colores';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Colores],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'prueba colores';
}

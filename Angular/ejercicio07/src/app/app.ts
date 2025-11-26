import { Component, signal } from '@angular/core';
import { Calculador } from './calculador/calculador';

@Component({
  selector: 'app-root',
  imports: [Calculador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicio07');
}

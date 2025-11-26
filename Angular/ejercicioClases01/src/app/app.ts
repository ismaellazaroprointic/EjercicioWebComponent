import { Component, signal } from '@angular/core';
import { Envio } from './envio/envio';

@Component({
  selector: 'app-root',
  imports: [Envio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicioClases01');
}

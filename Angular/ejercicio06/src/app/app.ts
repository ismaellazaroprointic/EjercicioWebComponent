import { Component, signal } from '@angular/core';
import { SumadorService } from './servicios/sumador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicio06');

  constructor(private sumadorService: SumadorService){}

  ngOnInit(): void {
    this.sumadorService.alertarSumador8();
  }
}

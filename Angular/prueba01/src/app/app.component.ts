import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica14Ej2';

  palabra1: string = ''; 
  palabra2: string = ''; 
  coincidentes: string="";

  capturarPalabra1(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.palabra1 = inputElement.value; 
  }

  capturarPalabra2(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.palabra2 = inputElement.value; 
  }

  procesarPalabra(): void {
    const setPalabra1 = new Set(this.palabra1); 
    const setPalabra2 = new Set(this.palabra2); 

    this.coincidentes = "coincidentes: " + Array.from(setPalabra1)
      .filter((letra)=>setPalabra2.has(letra))
      .join(", ");
  }
}

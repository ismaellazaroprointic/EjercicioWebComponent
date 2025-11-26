import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CuadradoService } from '../servicios/cuadrado.service';
import { CirculoService } from '../servicios/circulo.service';

@Component({
  selector: 'app-calculador',
  standalone: true,
  imports: [FormsModule],   // 👈 Necesario para usar ngModel
  templateUrl: './calculador.html',
})
export class Calculador {
  figura: string = '';
  valor: number = 0;

  constructor(private cuadradoService: CuadradoService, private circuloService: CirculoService){
  }
  

  calcular() {
    if (this.figura === 'cuadrado') {
      const area = this.cuadradoService.calcularArea(this.valor);      
      alert(`Cuadrado: ${area}`);
    } else if (this.figura === 'circulo') {
      const area = this.circuloService.calcularArea(this.valor);     
      alert(`Circulo: ${area}`);
    } else {
      alert('Selecciona una figura.');
    }
  }
}

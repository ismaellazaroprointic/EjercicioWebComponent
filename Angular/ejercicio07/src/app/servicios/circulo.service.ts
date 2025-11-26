import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CirculoService {
  calcularArea(radio: number): number {
    return Math.PI * Math.pow(radio, 2);
  }
}

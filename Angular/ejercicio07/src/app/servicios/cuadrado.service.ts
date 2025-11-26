import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuadradoService {
  calcularArea(lado: number): number {
    return lado * lado;
  }
}

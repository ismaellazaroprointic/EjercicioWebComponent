import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumadorService {
  alertarSumador8(): void {
    alert(8+8)
  }
}

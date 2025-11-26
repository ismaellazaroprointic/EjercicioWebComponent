import { Component } from '@angular/core';

@Component({
  selector: 'app-envio',
  imports: [],
  templateUrl: './envio.html',
  styleUrl: './envio.css',
})
export class Envio {

  constructor(private id: string, private numeroEnvio: bigint, private precioEnvio: number, private recibido: boolean){}

  calcularIva(): number{
    return this.precioEnvio * 0.21;
  }
  
}

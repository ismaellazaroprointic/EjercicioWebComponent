import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocasStore } from '../../services/rocas.store';

@Component({
  selector: 'app-rocas-pendientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rocas-pendientes.html',
  styleUrl: './rocas-pendientes.css',
})
export class RocasPendientesComponent {
  constructor(private rocasStore: RocasStore) {}

  // En vez de una propiedad, usamos un método
  pendientes() {
    return this.rocasStore.pendientes();
  }
}

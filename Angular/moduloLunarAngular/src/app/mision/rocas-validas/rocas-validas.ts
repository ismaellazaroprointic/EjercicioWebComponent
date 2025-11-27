import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocasStore } from '../../services/rocas.store';

@Component({
  selector: 'app-rocas-validas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rocas-validas.html',
  styleUrl: './rocas-validas.css',
})
export class RocasValidasComponent {
  constructor(private rocasStore: RocasStore) {}

  validas() {
    return this.rocasStore.validas();
  }
}

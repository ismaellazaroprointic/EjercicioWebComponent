import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocasStore } from '../../services/rocas.store';

@Component({
  selector: 'app-rocas-fallidas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rocas-fallidas.html',
  styleUrl: './rocas-fallidas.css',
})
export class RocasFallidasComponent {
  constructor(private rocasStore: RocasStore) {}

  fallidas() {
    return this.rocasStore.fallidas();
  }
}

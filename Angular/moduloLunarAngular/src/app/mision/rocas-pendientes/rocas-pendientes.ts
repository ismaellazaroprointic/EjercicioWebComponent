import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RocasStore } from '../../services/rocas.store';
import { Roca } from '../../services/roca';

@Component({
  selector: 'app-rocas-pendientes',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './rocas-pendientes.html',
  styleUrl: './rocas-pendientes.css',
})
export class RocasPendientesComponent {
  readonly displayedColumns = ['id', 'nombre', 'grupo', 'clasificacion'];
  readonly dataSource = new MatTableDataSource<Roca>([]);
  readonly pendientesSignal: () => Roca[];

  constructor(private rocasStore: RocasStore) {
    this.pendientesSignal = this.rocasStore.pendientes;

    effect(() => {
      this.dataSource.data = this.pendientesSignal();
    });
  }
}

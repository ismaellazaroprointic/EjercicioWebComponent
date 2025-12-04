import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RocasStore } from '../../services/rocas.store';
import { Roca } from '../../services/roca';

@Component({
  selector: 'app-rocas-fallidas',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './rocas-fallidas.html',
  styleUrl: './rocas-fallidas.css',
})
export class RocasFallidasComponent {
  readonly displayedColumns = ['id', 'nombre', 'grupo', 'clasificacion'];
  readonly dataSource = new MatTableDataSource<Roca>([]);
  readonly fallidasSignal: () => Roca[];

  constructor(private rocasStore: RocasStore) {
    this.fallidasSignal = this.rocasStore.fallidas;

    effect(() => {
      this.dataSource.data = this.fallidasSignal();
    });
  }
}

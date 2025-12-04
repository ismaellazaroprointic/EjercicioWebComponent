import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RocasStore } from '../../services/rocas.store';
import { Roca } from '../../services/roca';

@Component({
  selector: 'app-rocas-validas',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './rocas-validas.html',
  styleUrl: './rocas-validas.css',
})
export class RocasValidasComponent {
  readonly displayedColumns = ['id', 'nombre', 'grupo', 'clasificacion'];
  readonly dataSource = new MatTableDataSource<Roca>([]);
  readonly validasSignal: () => Roca[];

  constructor(private rocasStore: RocasStore) {
    this.validasSignal = this.rocasStore.validas;

    effect(() => {
      this.dataSource.data = this.validasSignal();
    });
  }
}

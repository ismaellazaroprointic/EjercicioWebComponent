import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RocasStore } from '../../services/rocas.store';
import { Directrices } from '../../services/directrices';

@Component({
  selector: 'app-validar-roca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './validar-roca.html',
  styleUrl: './validar-roca.css',
})
export class ValidarRocaComponent {
  @Input() directriz!: Directrices;

  idRoca = '';

  constructor(private rocasStore: RocasStore) {}

  validar() {
    const id = this.idRoca.trim();
    if (!id || !this.directriz) return;

    this.rocasStore.validarPorId(id, this.directriz);
    this.idRoca = '';
  }
}

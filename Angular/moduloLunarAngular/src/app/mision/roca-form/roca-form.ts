// src/app/mision/roca-form/roca-form.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Roca } from '../../services/roca';
import { RocasStore } from '../../services/rocas.store';

@Component({
  selector: 'app-roca-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './roca-form.html',
  styleUrl: './roca-form.css',
})
export class RocaFormComponent {
  // Campos del formulario (ligados a tu clase Roca)
  id = '';
  nombre = '';
  grupo: Roca['grupo'] | '' = '';
  dureza: number | null = null;
  tamGranoGrado: number | null = null;
  clasificacion: Roca['clasificacion'] | '' = '';
  tamCristales: number | null = null;
  temperaturaFormacion: number | null = null;
  estructura = '';
  formaGranos = '';
  textura: Roca['textura'] | '' = '';

  constructor(private rocasStore: RocasStore) {}

  enviar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    try {
      const roca = new Roca(
        this.id,
        this.nombre,
        this.grupo as Roca['grupo'],
        this.dureza as number,
        { grado: this.tamGranoGrado as number, desc: '' },
        this.clasificacion as Roca['clasificacion'],
        this.tamCristales as number,
        this.temperaturaFormacion as number,
        this.estructura,
        this.formaGranos,
        this.textura as Roca['textura']
      );

      // Añadimos la roca a la lista de pendientes
      this.rocasStore.addPendiente(roca);

      // Reseteamos el formulario pero dejamos algún valor por defecto si quieres
      form.resetForm({
        grupo: '',
        clasificacion: '',
        textura: '',
      });
    } catch (err) {
      // El propio constructor de Roca ya hace alert() y lanza errores,
      // aquí solo registramos en consola por si acaso.
      console.error('Error creando roca', err);
    }
  }
}

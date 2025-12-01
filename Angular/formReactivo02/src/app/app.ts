import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formReactivo02');

  profileForm!: FormGroup;
  imc!: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required]
    });
  }

  onSubmit() {
      this.imc = Number((this.profileForm.value.peso / Math.pow(this.profileForm.value.altura, 2)).toFixed(2));
  }
}

import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
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

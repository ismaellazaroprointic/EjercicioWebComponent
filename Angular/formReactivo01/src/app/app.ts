import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class App {
  name = new FormControl('');
  protected readonly title = signal('formReactivo01');
}

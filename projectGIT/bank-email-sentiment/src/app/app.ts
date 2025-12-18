import { Component, signal } from '@angular/core';
import { TextAnalyzer } from './text-analyzer/text-analyzer';


@Component({
  selector: 'app-root',
  imports: [TextAnalyzer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bank-email-sentiment');
}

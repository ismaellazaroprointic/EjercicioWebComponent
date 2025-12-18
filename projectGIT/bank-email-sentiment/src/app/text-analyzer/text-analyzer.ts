import { Component } from '@angular/core';
import { MatcherService } from '../service/matcher.service';

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [],
  templateUrl: './text-analyzer.html',
  styleUrl: './text-analyzer.scss',
})
export class TextAnalyzer {
  // Texto introducido en el textarea
  emailText: string = '';

  // Valores numéricos mostrados en los result-cards
  badWordsCount: number = 0;
  totalWeight: number = 0;

  constructor(private matcherService: MatcherService) {}

  onTextChange(event: Event): void {
    console.log('onTextChange');
    
    const target = event.target as HTMLTextAreaElement;
    this.emailText = target.value ?? '';

    if (!this.emailText.trim()) {
      this.badWordsCount = 0;
      this.totalWeight = 0;
      return;
    }

    const { totalWeight, wordCount } =
      this.matcherService.operateString(this.emailText);

    this.badWordsCount = wordCount;
    this.totalWeight = totalWeight;
  }
}

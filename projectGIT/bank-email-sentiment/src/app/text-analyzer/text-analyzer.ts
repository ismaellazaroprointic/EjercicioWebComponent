import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatcherService } from '../service/matcher.service';

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  templateUrl: './text-analyzer.html',
  styleUrls: ['./text-analyzer.scss'],
  imports: [FormsModule] // necesario para [(ngModel)]
})
export class TextAnalyzer {

  @ViewChild('fileInput', { static: true })
  fileInput!: ElementRef<HTMLInputElement>;

  emailText = '';
  badWordsCount = 0;
  totalWeight = 0;

  constructor(private matcher: MatcherService) {}

  onTextChange(value: string) {
    const res = this.matcher.operateString(value);
    this.totalWeight = res.totalWeight;
    this.badWordsCount = res.wordCount;
  }

  abrirSelector() {
    this.fileInput.nativeElement.click();
  }

  onUploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.emailText = reader.result as string;
      const res = this.matcher.operateString(this.emailText);
      this.totalWeight = res.totalWeight;
      this.badWordsCount = res.wordCount;
    };

    reader.readAsText(file);
  }
}
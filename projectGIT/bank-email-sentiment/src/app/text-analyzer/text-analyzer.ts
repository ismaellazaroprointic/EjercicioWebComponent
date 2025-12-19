import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatcherService } from '../service/matcher.service';

interface FileAnalysisResult {
  fileName: string;
  wordCount: number;
  totalWeight: number;
}

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-analyzer.html',
  styleUrl: './text-analyzer.scss',
})
export class TextAnalyzer {
  // Resultados individuales por fichero
  fileResults: FileAnalysisResult[] = [];

  // Totales acumulados de todos los ficheros analizados
  totalBadWords: number = 0;
  totalWeightAll: number = 0;

  constructor(private matcherService: MatcherService) {}

  /**
   * Maneja el evento de selección de directorio/ficheros (input type="file").
   */
  async onFilesSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    // Solo procesamos ficheros .txt
    const txtFiles = files.filter((file) =>
      file.name.toLowerCase().endsWith('.txt')
    );

    await this.analyzeFiles(txtFiles);
  }

  /**
   * Expone la lógica de análisis para facilitar las pruebas unitarias.
   */
  async analyzeFiles(files: File[]): Promise<void> {
    this.fileResults = [];
    this.totalBadWords = 0;
    this.totalWeightAll = 0;

    if (!files.length) {
      return;
    }

    for (const file of files) {
      const content = await (file as any).text();

      if (!content.trim()) {
        this.fileResults.push({
          fileName: file.name,
          wordCount: 0,
          totalWeight: 0,
        });
        continue;
      }

      const { totalWeight, wordCount } =
        this.matcherService.operateString(content);

      this.fileResults.push({
        fileName: file.name,
        wordCount,
        totalWeight,
      });

      this.totalBadWords += wordCount;
      this.totalWeightAll += totalWeight;
    }
  }
}

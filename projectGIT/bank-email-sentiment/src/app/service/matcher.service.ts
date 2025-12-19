import { Injectable } from '@angular/core';
import blacklist from '../feature/palabros/blacklist.json';
import { normalizeWord } from '../feature/palabros/normalizer';

@Injectable({
  providedIn: 'root'
})
export class MatcherService {

  /**
   * Comprueba una palabra contra la blacklist y devuelve su peso numérico.
   *  - 0  -> sin coincidencias
   *  - 1, 5 o 10 -> coincidencia encontrada según la blacklist
   */
  checkWord(input: string): number {
  const normalized = normalizeWord(input);

  for (const variant of normalized) {
    for (const [pattern, value] of Object.entries(blacklist)) {
      const regex = new RegExp(pattern, 'i');

      if (regex.test(variant)) {
        const numericValue = Number(value);
        return Number.isNaN(numericValue) ? 0 : numericValue;
      }
    }
  }

  return 0;
}

  operateString(input: string): { totalWeight: number, wordCount: number } {
    console.log('input', input);
    
    const words = input.split(' ');
    let totalWeight = 0;
    let wordCount = 0;
    for (const word of words) {
      const weight = this.checkWord(word);
      if (weight > 0) {
        totalWeight += weight;
        wordCount++;
      }
    }
    console.log('totalWeight', totalWeight);
    console.log('wordCount', wordCount);
    return {
      totalWeight,
      wordCount
    };
  }
}
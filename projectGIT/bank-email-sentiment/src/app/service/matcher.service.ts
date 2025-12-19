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

    for (const [pattern, value] of Object.entries(blacklist)) {
      const regex = new RegExp(pattern, 'i');

      if (regex.test(normalized)) {
        const numericValue = Number(value);
        // En caso de que el JSON no contenga un número válido, devolvemos 0 por seguridad
        return Number.isNaN(numericValue) ? 0 : numericValue;
      }
    }

    // Si no hay coincidencias devolvemos 0 en lugar de null
    return 0;
  }

  operateString(input: string): { totalWeight: number, wordCount: number } {
    
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
    return {
      totalWeight,
      wordCount
    };
  }
}
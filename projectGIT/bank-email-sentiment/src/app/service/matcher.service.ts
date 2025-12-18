import { Injectable } from '@angular/core';
import blacklist from '../feature/palabros/blacklist.json';
import { normalizeWord } from '../feature/palabros/normalizer';

@Injectable({
  providedIn: 'root'
})
export class MatcherService {

  checkWord(input: string): string | null {
    const normalized = normalizeWord(input);

    for (const [pattern, value] of Object.entries(blacklist)) {
      const regex = new RegExp(pattern, 'i');

      if (regex.test(normalized)) {
        return value;
      }
    }

    return null;
  }
}
import { NUMBER_MAP } from './mapeo/number-map';
import { ACCENT_MAP } from './mapeo/accent-map';

export function normalizeWord(input: string): string[] {
  // Primero reemplazar acentos
  let result = input.replace(/./g, (char) => {
    return ACCENT_MAP[char] ?? char;
  });

  // Generar todas las combinaciones de números
  const combinations = generateCombinations(result);
  
  return combinations.map(word => word.toLowerCase());
}

function generateCombinations(word: string): string[] {
  const combinations: string[] = [];
  
  function backtrack(index: number, current: string) {
    if (index === word.length) {
      combinations.push(current);
      return;
    }
    
    const char = word[index];
    if (NUMBER_MAP[char]) {
      for (const replacement of NUMBER_MAP[char]) {
        backtrack(index + 1, current + replacement);
      }
    } else {
      backtrack(index + 1, current + char);
    }
  }
  
  backtrack(0, '');
  return combinations;
}
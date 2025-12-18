import { NUMBER_MAP } from './mapeo/number-map';
import { ACCENT_MAP } from './mapeo/accent-map';

export function normalizeWord(input: string): string {
  let result = input;

  result = result.replace(/[0-9]/g, (char) => {
    return NUMBER_MAP[char]?.[0] ?? char;
  });

  result = result.replace(/./g, (char) => {
    return ACCENT_MAP[char] ?? char;
  });

  return result.toLowerCase();
}

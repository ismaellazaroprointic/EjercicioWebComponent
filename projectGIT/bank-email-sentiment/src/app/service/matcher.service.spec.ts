import { MatcherService } from './matcher.service';

describe('MatcherService', () => {
  let service: MatcherService;

  beforeEach(() => {
    service = new MatcherService();
  });

  it('debería devolver 0 para palabras que no están en la blacklist', () => {
    const weight = service.checkWord('hola');
    expect(weight).toBe(0);
  });

  it('debería contar y sumar correctamente palabras de la blacklist en operateString', () => {
    const input = 'cabron cenutrio hola';

    const result = service.operateString(input);

    // Según la blacklist actual:
    //  - \"cabron\" tiene peso 10
    //  - \"cenutrio\" tiene peso 5
    //  - \"hola\" no suma nada
    expect(result.wordCount).toBe(2);
    expect(result.totalWeight).toBe(15);
  });

  it('debería devolver 0 pesos y 0 palabras para cadena vacía', () => {
    const result = service.operateString('');

    expect(result.wordCount).toBe(0);
    expect(result.totalWeight).toBe(0);
  });
});


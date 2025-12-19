import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TextAnalyzer } from './text-analyzer';
import { MatcherService } from '../service/matcher.service';

class MatcherServiceStub {
  operateString(input: string): { totalWeight: number; wordCount: number } {
    // Para simplificar las pruebas, usamos la longitud del texto como peso
    // y el número de palabras separadas por espacio como contador.
    const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
    const totalWeight = input.length;
    return { totalWeight, wordCount };
  }

  checkWord(_input: string): number {
    return 0;
  }
}

describe('TextAnalyzer', () => {
  let component: TextAnalyzer;
  let fixture: ComponentFixture<TextAnalyzer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAnalyzer],
      providers: [{ provide: MatcherService, useClass: MatcherServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(TextAnalyzer);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería analizar varios ficheros txt y mostrar resultados por documento y totales', async () => {
    const file1 = new File(['palabra1 palabra2'], 'Fichero 1.txt', {
      type: 'text/plain',
    });
    const file2 = new File(['uno dos tres cuatro'], 'Fichero 2.txt', {
      type: 'text/plain',
    });
    const file3 = new File(['a b c d e f g'], 'Fichero 3.txt', {
      type: 'text/plain',
    });

    await component.analyzeFiles([file1, file2, file3]);
    fixture.detectChanges();

    // Comprobamos que hay un resultado por cada fichero
    expect(component.fileResults.length).toBe(3);

    // Verificamos que el template muestre la lista de ficheros
    const fileItems = fixture.debugElement.queryAll(
      By.css('.file-result-item')
    );
    expect(fileItems.length).toBe(3);

    const texts = fileItems.map(
      (item) => (item.nativeElement as HTMLElement).textContent?.trim() ?? ''
    );

    expect(texts[0]).toContain('Fichero 1.txt');
    expect(texts[1]).toContain('Fichero 2.txt');
    expect(texts[2]).toContain('Fichero 3.txt');

    // Verificamos que la tarjeta de totales se muestra
    const totalElement = fixture.debugElement.query(By.css('.result-value'))
      .nativeElement as HTMLElement;
    expect(totalElement.textContent?.trim()).not.toBe('');
  });

  it('debería dejar totales a cero cuando no hay ficheros', async () => {
    await component.analyzeFiles([]);
    fixture.detectChanges();

    expect(component.fileResults.length).toBe(0);
    expect(component.totalBadWords).toBe(0);
    expect(component.totalWeightAll).toBe(0);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculador } from './calculador';

describe('Calculador', () => {
  let component: Calculador;
  let fixture: ComponentFixture<Calculador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

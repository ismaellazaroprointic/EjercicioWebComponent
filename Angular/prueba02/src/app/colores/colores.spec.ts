import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colores } from './colores';

describe('Colores', () => {
  let component: Colores;
  let fixture: ComponentFixture<Colores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

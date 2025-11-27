import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarRoca } from './validar-roca';

describe('ValidarRoca', () => {
  let component: ValidarRoca;
  let fixture: ComponentFixture<ValidarRoca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarRoca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarRoca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

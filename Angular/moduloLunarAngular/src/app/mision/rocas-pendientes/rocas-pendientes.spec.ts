import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocasPendientes } from './rocas-pendientes';

describe('RocasPendientes', () => {
  let component: RocasPendientes;
  let fixture: ComponentFixture<RocasPendientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocasPendientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocasPendientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

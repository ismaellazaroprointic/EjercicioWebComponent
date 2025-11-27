import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocasFallidas } from './rocas-fallidas';

describe('RocasFallidas', () => {
  let component: RocasFallidas;
  let fixture: ComponentFixture<RocasFallidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocasFallidas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocasFallidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

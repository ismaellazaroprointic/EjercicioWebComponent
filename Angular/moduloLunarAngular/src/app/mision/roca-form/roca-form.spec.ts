import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocaForm } from './roca-form';

describe('RocaForm', () => {
  let component: RocaForm;
  let fixture: ComponentFixture<RocaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

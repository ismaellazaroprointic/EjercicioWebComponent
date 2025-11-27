import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocasValidas } from './rocas-validas';

describe('RocasValidas', () => {
  let component: RocasValidas;
  let fixture: ComponentFixture<RocasValidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocasValidas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocasValidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

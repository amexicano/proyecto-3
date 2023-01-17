import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioautoestimaComponent } from './cuestionarioautoestima.component';

describe('CuestionarioautoestimaComponent', () => {
  let component: CuestionarioautoestimaComponent;
  let fixture: ComponentFixture<CuestionarioautoestimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionarioautoestimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionarioautoestimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

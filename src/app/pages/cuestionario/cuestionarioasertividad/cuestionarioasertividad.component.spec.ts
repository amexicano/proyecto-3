import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioasertividadComponent } from './cuestionarioasertividad.component';

describe('CuestionarioasertividadComponent', () => {
  let component: CuestionarioasertividadComponent;
  let fixture: ComponentFixture<CuestionarioasertividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionarioasertividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionarioasertividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

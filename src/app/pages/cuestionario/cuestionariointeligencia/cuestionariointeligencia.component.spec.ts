import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionariointeligenciaComponent } from './cuestionariointeligencia.component';

describe('CuestionariointeligenciaComponent', () => {
  let component: CuestionariointeligenciaComponent;
  let fixture: ComponentFixture<CuestionariointeligenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionariointeligenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionariointeligenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsertividadComponent } from './asertividad.component';

describe('AsertividadComponent', () => {
  let component: AsertividadComponent;
  let fixture: ComponentFixture<AsertividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsertividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsertividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

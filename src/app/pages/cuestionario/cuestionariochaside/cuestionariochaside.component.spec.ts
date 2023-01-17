import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionariochasideComponent } from './cuestionariochaside.component';

describe('CuestionariochasideComponent', () => {
  let component: CuestionariochasideComponent;
  let fixture: ComponentFixture<CuestionariochasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionariochasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionariochasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

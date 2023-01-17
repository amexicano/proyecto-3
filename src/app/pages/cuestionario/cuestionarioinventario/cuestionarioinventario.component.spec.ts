import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioinventarioComponent } from './cuestionarioinventario.component';

describe('CuestionarioinventarioComponent', () => {
  let component: CuestionarioinventarioComponent;
  let fixture: ComponentFixture<CuestionarioinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionarioinventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuestionarioinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

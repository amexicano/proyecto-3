import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasideComponent } from './chaside.component';

describe('ChasideComponent', () => {
  let component: ChasideComponent;
  let fixture: ComponentFixture<ChasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

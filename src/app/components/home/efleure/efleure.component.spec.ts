import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfleureComponent } from './efleure.component';





describe('EfleureComponent', () => {
  let component: EfleureComponent;
  let fixture: ComponentFixture<EfleureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfleureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfleureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

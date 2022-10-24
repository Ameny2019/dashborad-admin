import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondventeComponent } from './condvente.component';

describe('CondventeComponent', () => {
  let component: CondventeComponent;
  let fixture: ComponentFixture<CondventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

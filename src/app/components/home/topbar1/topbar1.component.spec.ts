import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topbar1Component } from './topbar1.component';

describe('Topbar1Component', () => {
  let component: Topbar1Component;
  let fixture: ComponentFixture<Topbar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topbar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

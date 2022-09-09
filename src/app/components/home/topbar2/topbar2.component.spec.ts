import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topbar2Component } from './topbar2.component';

describe('Topbar2Component', () => {
  let component: Topbar2Component;
  let fixture: ComponentFixture<Topbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Topbar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Topbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

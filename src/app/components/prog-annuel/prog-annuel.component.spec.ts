import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgAnnuelComponent } from './prog-annuel.component';

describe('ProgAnnuelComponent', () => {
  let component: ProgAnnuelComponent;
  let fixture: ComponentFixture<ProgAnnuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgAnnuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgAnnuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

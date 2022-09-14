import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistphilComponent } from './histphil.component';

describe('HistphilComponent', () => {
  let component: HistphilComponent;
  let fixture: ComponentFixture<HistphilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistphilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistphilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

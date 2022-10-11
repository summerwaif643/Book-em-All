import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeBookingsComponent } from './visualize-bookings.component';

describe('VisualizeBookingsComponent', () => {
  let component: VisualizeBookingsComponent;
  let fixture: ComponentFixture<VisualizeBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAppointmentPageComponent } from './cancel-appointment-page.component';

describe('CancelAppointmentPageComponent', () => {
  let component: CancelAppointmentPageComponent;
  let fixture: ComponentFixture<CancelAppointmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelAppointmentPageComponent]
    });
    fixture = TestBed.createComponent(CancelAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

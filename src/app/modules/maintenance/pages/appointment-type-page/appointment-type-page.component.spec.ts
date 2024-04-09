import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypePageComponent } from './appointment-type-page.component';

describe('AppointmentTypePageComponent', () => {
  let component: AppointmentTypePageComponent;
  let fixture: ComponentFixture<AppointmentTypePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentTypePageComponent]
    });
    fixture = TestBed.createComponent(AppointmentTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

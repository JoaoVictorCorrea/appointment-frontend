import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeComponent } from './time.component';
import { TimePipe } from 'src/app/shared/pipes/time.pipe';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeComponent,
        TimePipe
      ]
    });
    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

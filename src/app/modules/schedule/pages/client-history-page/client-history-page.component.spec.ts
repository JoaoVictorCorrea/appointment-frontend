import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoryPageComponent } from './client-history-page.component';

describe('ClientHistoryPageComponent', () => {
  let component: ClientHistoryPageComponent;
  let fixture: ComponentFixture<ClientHistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientHistoryPageComponent]
    });
    fixture = TestBed.createComponent(ClientHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

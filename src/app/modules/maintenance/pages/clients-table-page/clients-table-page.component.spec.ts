import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTablePageComponent } from './clients-table-page.component';

describe('ClientsTablePageComponent', () => {
  let component: ClientsTablePageComponent;
  let fixture: ComponentFixture<ClientsTablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsTablePageComponent]
    });
    fixture = TestBed.createComponent(ClientsTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormPageComponent } from './client-form-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ClientFormPageComponent', () => {
  let component: ClientFormPageComponent;
  let fixture: ComponentFixture<ClientFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFormPageComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(ClientFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTablePageComponent } from './clients-table-page.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FormsModule } from '@angular/forms';

describe('ClientsTablePageComponent', () => {
  let component: ClientsTablePageComponent;
  let fixture: ComponentFixture<ClientsTablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientsTablePageComponent,
        ModalComponent
      ],
      imports: [
        HttpClientTestingModule,
        NgbPagination,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(ClientsTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

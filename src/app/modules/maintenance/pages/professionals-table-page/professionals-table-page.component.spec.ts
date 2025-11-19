import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsTablePageComponent } from './professionals-table-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FormsModule } from '@angular/forms';

describe('ProfessionalsTablePageComponent', () => {
  let component: ProfessionalsTablePageComponent;
  let fixture: ComponentFixture<ProfessionalsTablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfessionalsTablePageComponent,
        ModalComponent
      ],
      imports: [
        HttpClientTestingModule,
        NgbPagination,
        FormsModule
      ],
      providers: [DatePipe]
    });
    fixture = TestBed.createComponent(ProfessionalsTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

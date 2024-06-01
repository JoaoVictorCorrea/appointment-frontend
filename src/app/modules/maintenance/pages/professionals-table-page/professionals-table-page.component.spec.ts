import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsTablePageComponent } from './professionals-table-page.component';

describe('ProfessionalsTablePageComponent', () => {
  let component: ProfessionalsTablePageComponent;
  let fixture: ComponentFixture<ProfessionalsTablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalsTablePageComponent]
    });
    fixture = TestBed.createComponent(ProfessionalsTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input()
  title !: string;

  @ViewChild("modal")
  private modalContent !: TemplateRef<ModalComponent>;

  constructor(private modalService: NgbModal) { }
  
  open() {
    return this.modalService.open(this.modalContent, {}).result;
	}
}

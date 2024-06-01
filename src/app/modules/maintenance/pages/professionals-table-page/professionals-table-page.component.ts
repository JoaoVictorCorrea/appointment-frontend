import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page';
import { Professional } from 'src/app/core/models/professional';
import { ProfessionalService } from 'src/app/core/services/professional.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-professionals-table-page',
  templateUrl: './professionals-table-page.component.html',
  styleUrls: ['./professionals-table-page.component.css']
})
export class ProfessionalsTablePageComponent implements OnInit {

  constructor(private professionalService: ProfessionalService, private toastService: ToastService) { }

  professionalPage: Page<Professional> = {} as Page<Professional>;
  page = 1;

  filter: string = "";

  selectedProfessional !: Professional;
  
  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals() {
    this.professionalService.getProfessionals(this.filter, this.page).subscribe({
      next: response => {
        this.professionalPage.content = response.body;
        this.professionalPage.numberOfElements = parseInt(response.headers.get("X-Total-Count") || "0");
      }
    });
  }

  pageChange() {
    this.loadProfessionals();
  }

  filterName() {
    this.loadProfessionals();
  }

  deleteProfessional(professional: Professional, modalConfirm: ModalComponent) {
    this.selectedProfessional = professional;
    modalConfirm.open().then(confirm => {
      if (confirm) {
        this.professionalService.deleteProfessional(professional).subscribe({
          next: () => {
            this.toastService.show("Profissional Removido com sucesso!", { classname: "bg-success text-light" });
            this.loadProfessionals();
          },
          error: () => {
            this.toastService.show("Erro ao Remover o profissional!", { classname: "bg-danger text-light" })
          }
        });
      }
    })
  }
}

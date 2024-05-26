import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/core/models/page';
import { Professional } from 'src/app/core/models/professional';
import { ProfessionalService } from 'src/app/core/services/professional.service';

@Component({
  selector: 'app-professionals-table-page',
  templateUrl: './professionals-table-page.component.html',
  styleUrls: ['./professionals-table-page.component.css']
})
export class ProfessionalsTablePageComponent implements OnInit {

  constructor(private professionalService: ProfessionalService) { }

  professionalPage: Page<Professional> = {} as Page<Professional>;
  page = 1;

  professionals: Professional[] = [];

  filter: string = "";
  
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

  deleteProfessional(professional: Professional) {
    this.professionalService.deleteProfessional(professional).subscribe({
      next: () => {
        console.log("Excluido " + professional.id);
        this.loadProfessionals();
      },
      error: () => {
        console.log("Erro ao excluir");
      }
    });
  }
}

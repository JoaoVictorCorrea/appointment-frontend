import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/core/models/professional';
import { ProfessionalService } from 'src/app/core/services/professional.service';

@Component({
  selector: 'app-professionals-table-page',
  templateUrl: './professionals-table-page.component.html',
  styleUrls: ['./professionals-table-page.component.css']
})
export class ProfessionalsTablePageComponent implements OnInit {

  constructor(private professionalService: ProfessionalService) { }

  professionals: Professional[] = [];

  filter: string = "";
  
  ngOnInit(): void {
    this.loadProfessionals();
  }

  loadProfessionals() {
    this.professionalService.getProfessionals(this.filter).subscribe({
      next: professionals => this.professionals = professionals
    });
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

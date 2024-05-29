import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Area } from 'src/app/core/models/area';
import { Professional } from 'src/app/core/models/professional';
import { AreaService } from 'src/app/core/services/area.service';
import { ProfessionalService } from 'src/app/core/services/professional.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-professional-form-page',
  templateUrl: './professional-form-page.component.html',
  styleUrls: ['./professional-form-page.component.css']
})
export class ProfessionalFormPageComponent implements OnInit {

  professionalForm: FormGroup;
  isEditing: boolean = false;

  areas: Area [] = [];

  constructor(private formBuilder: FormBuilder,
              private professionalService: ProfessionalService,
              private areaService: AreaService,
              private location: Location,
              private router: ActivatedRoute,
              private toastService: ToastService) {
    this.professionalForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      active: [''],
      areaId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      let professionalId = Number(params.get("id") ?? "0");

      if (professionalId) {
        this.loadProfessional(professionalId);
        this.isEditing = true;
      }
    });

    this.loadAreas();
  }

  loadAreas() {
    
    this.areaService.getAreas().subscribe({
      next: areas => this.areas = areas
    })
  }

  loadProfessional(professionalId: number) {
    this.professionalService.getProfessionalById(professionalId).subscribe({
      next: professional => this.professionalForm.setValue(professional),
      error: () => alert("Erro ao carregar um profissional")
    })
  }

  save() {
    if (this.professionalForm.valid) {
      if (this.isEditing) {
        this.professionalService.update(this.professionalForm.value).subscribe(
          {
            next: () => { 
              this.toastService.show("Profissional Atualizado com sucesso!", { classname: "bg-success text-light" });
              this.location.back();
            },
            error: () => this.toastService.show("Erro ao Salvar o profissional!", { classname: "bg-danger text-light" })
          }
        );
      }
      else {
        let newProfessional: Professional = this.professionalForm.value;
        newProfessional.active = true;

        this.professionalService.save(newProfessional).subscribe(
          {
            next: () => {
              this.toastService.show("Profissional Salvo com sucesso!", { classname: "bg-success text-light" });
              this.location.back();
            },
            error: () => this.toastService.show("Erro ao Criar o profissional!", { classname: "bg-danger text-light" })
          }
        );
      }
    }
  }

  cancel() {
    this.location.back();
  }

  get cfName() {return this.professionalForm.get("name")}
  get cfPhone() { return this.professionalForm.get("phone") }
  get cfActive() { return this.professionalForm.get("active") }
  get cfAreaId() {return this.professionalForm.get("areaId")}
}

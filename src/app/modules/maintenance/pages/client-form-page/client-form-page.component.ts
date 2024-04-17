import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-client-form-page',
  templateUrl: './client-form-page.component.html',
  styleUrls: ['./client-form-page.component.css']
})
export class ClientFormPageComponent implements OnInit {

  clientForm: FormGroup;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private location: Location, private router: ActivatedRoute) {
    this.clientForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      let clientId = Number(params.get("id") ?? "0");

      if (clientId) {
        this.loadClient(clientId);
        this.isEditing = true;
      }
    })
  }

  loadClient(clientId: number) {
    this.clientService.getClientById(clientId).subscribe({
      next: client => this.clientForm.setValue(client),
      error: () => alert("Erro ao carregar um cliente")
    })
  }

  save() {
    if (this.clientForm.valid) {
      if (this.isEditing) {
        this.clientService.update(this.clientForm.value).subscribe(
          {
            next: () => {
              this.location.back();
            },
            error: () => alert("Erro ao editar o cliente")
          }
        );
      }
      else {
        this.clientService.save(this.clientForm.value).subscribe(
          {
            next: () => {
              this.location.back();
            },
            error: () => alert("Erro ao salvar o cliente")
          }
        );
      }
    }
  }

  cancel() {
    this.location.back();
  }

  get cfName() {return this.clientForm.get("name")}
  get cfPhone() { return this.clientForm.get("phone") }
  get cfDateOfBirth() {return this.clientForm.get("dateOfBirth")}
}

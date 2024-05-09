import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';
import { ModalComponent } from './components/modal/modal.component';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ToastComponent,
    ModalComponent,
    TimePipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ToastComponent,
    ModalComponent,
    TimePipe
  ]
})
export class SharedModule { }

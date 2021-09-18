import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
//import modulo de formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule, MaterialModule, ReactiveFormsModule
  ]
})
export class ContactModule { }

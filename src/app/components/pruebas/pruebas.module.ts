import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PruebasRoutingModule } from './pruebas-routing.module';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [PruebasComponent],
  imports: [
    CommonModule,
    PruebasRoutingModule, SharedModule, FormsModule
  ]
})
export class PruebasModule { }

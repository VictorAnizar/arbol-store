import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosCardsRoutingModule } from './servicios-cards-routing.module';
import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ServiciosCardsComponent],
  imports: [
    CommonModule,
    ServiciosCardsRoutingModule, SharedModule
  ]
})
export class ServiciosCardsModule { }

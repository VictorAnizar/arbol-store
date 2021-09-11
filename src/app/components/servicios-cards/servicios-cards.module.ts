import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosCardsRoutingModule } from './servicios-cards-routing.module';
import { ServicioCardComponent } from './components/servicio-card/servicio-card.component';
import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';
import { ServicioDetailComponent } from './components/servicio-detail/servicio-detail.component';
@NgModule({
  declarations: [ServicioCardComponent, ServiciosCardsComponent, ServicioDetailComponent],
  imports: [
    CommonModule,
    ServiciosCardsRoutingModule
  ]
})
export class ServiciosCardsModule { }

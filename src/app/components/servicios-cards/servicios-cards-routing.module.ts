import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosCardsComponent } from './servicios-cards.component';
import { ServicioDetailComponent } from './components/servicio-detail/servicio-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosCardsComponent
  },
  {
    path: ':id',
    component: ServicioDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosCardsRoutingModule { }

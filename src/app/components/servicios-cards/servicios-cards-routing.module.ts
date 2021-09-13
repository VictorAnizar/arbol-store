import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';

const routes: Routes = [
   {
     path: '',
     component: ServiciosCardsComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosCardsRoutingModule { }

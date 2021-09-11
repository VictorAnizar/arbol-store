import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebasComponent } from './components/pruebas/pruebas.component';
const routes: Routes = [
  {
    path: '',
    component: PruebasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebasRoutingModule { }

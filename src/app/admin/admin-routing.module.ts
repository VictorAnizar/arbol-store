import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { GeneraProductoComponent } from './components/genera-producto/genera-producto.component';
import { EditaProductoComponent } from './components/edita-producto/edita-producto.component';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path:'info-table',
        component: TableComponent
      },
      
      {
        path: 'products',
        component: ProductsListComponent
      }, 
      {
        path: 'products/create',
        component: GeneraProductoComponent
      },
      {
        path: 'products/edit/:id',
        component: EditaProductoComponent
      }
    ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

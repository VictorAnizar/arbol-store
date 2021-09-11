import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
//import { ContactComponent } from './components/contact/contact.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
//import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';
//import { ServicioDetailComponent } from './components/servicio-detail/servicio-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent , children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      { 
        path: 'home', 
        // component: HomeComponent 
        loadChildren: () => import('./components/home/home.module').then(m=>m.HomeModule)
      },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { 
        path: 'servicios', 
        loadChildren: ()=> import('./components/servicios-cards/servicios-cards.module').then(m=>m.ServiciosCardsModule)
        //component: ServiciosCardsComponent 
      },
      //{ path: 'servicios/:id', component: ServicioDetailComponent },
      { 
        path: 'contact', 
        loadChildren: () => import('./components/contact/contact.module').then(m=>m.ContactModule) 
      },
      { path: 'pruebas', component: PruebasComponent },
      { path: '**', component: PaginaNoEncontradaComponent }
    ]
  },

];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

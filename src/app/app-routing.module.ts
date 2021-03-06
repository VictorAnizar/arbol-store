import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { ProductsComponent } from './components/products/products.component';
//import { ContactComponent } from './components/contact/contact.component';
// import { PruebasComponent } from './components/pruebas/pruebas.component';
// import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
// import { ProductDetailComponent } from './components/products/components/product-detail/product-detail.component';
// import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';
// import { ServicioDetailComponent } from './components/servicios-cards/components/servicio-detail/servicio-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
// import { AdminGuard } from './guardianes/admin.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
      },
      {
        path: 'home',
        // component: HomeComponent 
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'cart',
        loadChildren: ()=> import('./components/cart/cart.module').then(m=>m.CartModule)
      },
      { 
        path: 'products', 
        loadChildren: ()=>import('./components/products/products.module').then(m=>m.ProductsModule)
        //component: ProductsComponent 
      },
      //{ path: 'products/:id', component: ProductDetailComponent },
      {
        path: 'servicios',
        loadChildren: () => import('./components/servicios-cards/servicios-cards.module').then(m => m.ServiciosCardsModule)
        //component: ServiciosCardsComponent 
      },
      //{ path: 'servicios/:id', component: ServicioDetailComponent },
      {
        path: 'contact',
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'pruebas', 
        loadChildren: ()=>import('./components/pruebas/pruebas.module').then(m=>m.PruebasModule),
        // canActivate: [AdminGuard]
      },

    ],
    
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  { path: '**', loadChildren: ()=>import('./components/pagina-no-encontrada/pagina-no-encontrada.module').then(m=>m.PaginaNoEncontradaModule) }

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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductComponent } from './components/shared/components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
//import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
//import { SumaPipePipe } from './pipes/suma/suma-pipe.pipe';
//import { HighlightDirective } from './directives/highlight/highlight.directive';
// import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
//import { ContactComponent } from './components/contact/contact.component';
//import { PruebasComponent } from './components/pruebas/pruebas.component';
//import { HeaderComponent } from './components/shared/components/header/header.component';
//import { FooterComponent } from './components/footer/footer.component';
//import { BannerComponent } from './components/banner/banner.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
//import { ServicioCardComponent } from './components/servicios-cards/components/servicio-card/servicio-card.component';
//import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';
//import { ServicioDetailComponent } from './components/servicio-detail/servicio-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    CartComponent,
    //ExponentialPipe,
    //SumaPipePipe,
    //HighlightDirective,
    // HomeComponent,
    ProductsComponent,
    //ContactComponent,
    //PruebasComponent,
    //HeaderComponent,
    //FooterComponent,
    //BannerComponent,
    PaginaNoEncontradaComponent,
    ProductDetailComponent,
    //ServicioCardComponent,
    //ServiciosCardsComponent,
    //ServicioDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

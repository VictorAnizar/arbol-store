import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioService } from './services/servicio/servicio.service';
import { ProductsService } from './services/products/products.service';
import { ComidasService } from './services/comidas/comidas.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ServicioService,
    ProductsService, ComidasService
  ]
})
export class CoreModule { }

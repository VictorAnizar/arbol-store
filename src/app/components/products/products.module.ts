import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
@NgModule({
  declarations: [ProductDetailComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule, SharedModule, MaterialModule
  ]
})
export class ProductsModule { }

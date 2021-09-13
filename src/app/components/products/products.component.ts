import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/components/core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  clickProduct(id: Number){
    console.log("product");
    console.log(id);
    
    
  }
  constructor(
    private productsService: ProductsService
  ) { 
    this.products=productsService.getAllProducts();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productoAttr: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id= params.id;
      let producto=this.productsService.getProduct(id);
      console.log(producto);
      this.productoAttr=producto; 
    }); 
  }

}

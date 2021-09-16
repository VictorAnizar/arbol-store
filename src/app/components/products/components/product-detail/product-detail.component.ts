import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/components/core/services/products/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productoAttr: any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id= params.id;
      this.fetchProduct(id);
    }); 
  }

  fetchProduct(id){
    this.productsService.getProduct(id).subscribe(product=>{
      this.productoAttr=product;
    });
  }

}

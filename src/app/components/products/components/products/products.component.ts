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
    productsService.getAllProducts().subscribe(prods=>{
      this.products=prods;
    });
  }

  ngOnInit(): void {
  }

  createProduct(){
    const newProducto:Product ={
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/icons8-tree-64.png',
      price: 3000,
      description: "Nuevo producto"
    }
    this.productsService.createProduct(newProducto).subscribe(product=>{
      console.log(product);
      
    })
  }
  // updateProduct(){
  //   const modifyProducto:Partial<Product> ={
  //     id: '222',
  //     title: 'modificado desde angular',
  //     image: 'assets/images/icons8-tree-64.png',
  //   }
  //   this.productsService.updateProduct(2,modifyProducto).subscribe(product=>{
  //     console.log(product);
      
  //   })
  // }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/components/core/services/products/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[]=[];
  displayedColumns: string[] = ['id', 'titulo', 'precio', 'acciones'];
  dataSource: Product[]=[];
  constructor(private productsService: ProductsService) { 
    this.fetchProducts();
    this.dataSource = this.products;
  }


  ngOnInit(): void {
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(p=>{
      this.products=p;
      console.log(this.products);
      
    })
  }
  editProduct(id){
    let updatedProduct: Partial<Product>={
      title: " Modificado",
      price: 8000,
      description: 'Producto de prueba (modificado)'
    }
    this.productsService.updateProduct(id, updatedProduct).subscribe(p=>{
      alert("Producto moficidado");
     
    })
  }
  deleteProduct(id){
    this.productsService.deleteProduct(id).subscribe(p=>{
      alert("Producto eliminado");
      if (p) {
        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
      
    })
  }
  createProduct(){
    let newProduct: Product={
      id: '777',
      image: 'assets/images/camiseta.png',
      title: 'newProduct',
      price: 5000,
      description: 'Producto de prueba'
    }
    this.productsService.createProduct(newProduct).subscribe(p=>{
      alert("Producto creado");
      this.fetchProducts();
    })
  }
}

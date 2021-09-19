import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[]=[];
  //el carrito inicia en 0 prods
  private cart = new BehaviorSubject<Product[]>([]);
  cart$= this.cart.asObservable();
  constructor() { }

  addCart(prod: Product){
    // this.products = [...this.products, prod];
    this.products.push(prod);
    this.cart.next(this.products);
  }
  removeCart(id){
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].id==id) {
        this.products.splice(index,1);
        console.log("Eliminado del carrito");   
      }  
    }

    this.cart.next(this.products);
     
  }
}

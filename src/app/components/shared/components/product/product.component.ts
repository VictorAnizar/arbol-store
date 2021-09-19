import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../../../../models/product';
import { CartService } from 'src/app/components/core/services/cart/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy{
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor(public cartService: CartService){
    console.log("1. Construyendo producto");
  }
  // ngOnChanges(changes: SimpleChanges ){
  //   console.log("2. ngOnChanges");
  //   console.log(changes);
  // }
  ngOnInit(){
    console.log("3. OnInit");
    
  }
  ngDoCheck(){
    console.log("4. DoCheck");
    
  }
  
  ngOnDestroy(){
    console.log("Componente eliminado");
    
  }
  addCart(){
    this.cartService.addCart(this.product);
    console.log("Añadido al carrito");
  }
  removeCart(id){
    this.cartService.removeCart(id);
  }

 

  
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/components/core/services/cart/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
 
})
export class CartComponent implements OnInit {

  productos$:Observable<Product[]>;
  
  constructor(
    private cartService: CartService,
    ) {
    // lo sig es si productos no fuera un observable
    // cartService.cart$.subscribe(prods=>{
    //   console.log(prods);
    //   this.productos=prods;   
    // })
    //como productos es un observable
    this.productos$=this.cartService.cart$;

   }

   ngOnInit() {
   
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  contadorProds=0;
  constructor(
  private  cartService: CartService
  ) {
      this.cartService.cart$.subscribe(prods=>{
        console.log(prods);
        this.contadorProds=prods.length;
      })
   }

  ngOnInit(): void {
  }

}

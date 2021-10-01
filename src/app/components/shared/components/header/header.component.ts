import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/components/core/services/cart/cart.service';
import { map } from 'rxjs/operators';


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
      //forma tradicional
      // this.cartService.cart$.subscribe(prods=>{
      //   console.log(prods);
      //   this.contadorProds=prods.length;
      // })
      //forma con pipes (es recomendable para datos reactivos)
      this.cartService.cart$
      .pipe(
        map(products=>products.length)
      )
      .subscribe(total=>{
        this.contadorProds=total;
      })
   }

  ngOnInit(): void {
  }

}

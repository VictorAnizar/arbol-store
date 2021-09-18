import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/components/core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidator } from 'src/app/utils/validator';
@Component({
  selector: 'app-genera-producto',
  templateUrl: './genera-producto.component.html',
  styleUrls: ['./genera-producto.component.scss']
})
export class GeneraProductoComponent implements OnInit {


  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
    console.log(this.form.value);
    
   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['',
        [
          Validators.required
        ]
      ],
      title: ['',
        [
          Validators.required
        ]
      ],
      price: [0,
        [
          Validators.required,
          MyValidator.isPriceValid
        ]
      ],
      image: ['assets/images/camiseta.png'],
      description: ['',
        [
          Validators.required
        ]
      ]
    })
  }

  saveProduct(event : Event){
    event.preventDefault();
    console.log(this.form.value)
    if(this.form.valid){
      this.productsService.createProduct(this.form.value).subscribe(p=>{
        alert("producto creado");
        console.log(p);
        this.router.navigate(['./admin/products'])
      });
    }
  }

}

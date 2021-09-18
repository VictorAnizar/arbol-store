import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/components/core/services/products/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MyValidator } from 'src/app/utils/validator';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edita-producto',
  templateUrl: './edita-producto.component.html',
  styleUrls: ['./edita-producto.component.scss']
})
export class EditaProductoComponent implements OnInit {


  public form: FormGroup;
  public product: Product;
  public id;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    //this.fetchProduct();
    this.buildForm();
  }
  
  ngOnInit(): void {
    
    this.route.params.subscribe((params: Params)=>{
      this.id= params.id;
      this.fetchProduct();
      
    });
  }

  fetchProduct(){
    this.productsService.getProduct(this.id).subscribe(p=>{
      // this.product=p;
      this.form.patchValue(p)
    })
  }

  private buildForm() {
    
    
    this.form = this.formBuilder.group({
      // id: ['',
      //   [
      //     Validators.required
      //   ]
      // ],
      title: ['',
        [
          Validators.required
        ]
      ],
      price: ['',
        [
          Validators.required,
          MyValidator.isPriceValid
        ]
      ],
      // image: ['assets/images/camiseta.png'],
      description: ['',
        [
          Validators.required
        ]
      ]
    })
  }

  saveProductModified(event: Event){
    if (this.form.valid) {
      this.productsService.updateProduct(this.id, this.form.value).subscribe(p=>{
        console.log(p);
        alert("Producto Actializado");
        this.router.navigate(['/admin/products']);
      }
    )
    }
    
  }

}

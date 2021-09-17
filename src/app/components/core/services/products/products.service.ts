import { Injectable } from '@angular/core';
import { Product } from '../../../../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];
  constructor(private httpClient: HttpClient) { }
  getAllProducts(){
    return this.httpClient.get<Product[]>(environment.url_api);
  }
  getProduct(id){
    return this.httpClient.get<Product>(environment.url_api+id);
  }
  createProduct(product: Product){
    return this.httpClient.post(environment.url_api, product)
  }
  //enviamos el id y no todo el producto, sino solo el/los elementos que se desean cambiar 
  updateProduct(id, changes: Partial<Product>){
    //enviamos la url y los cambios
     return this.httpClient.put(environment.url_api+id, changes);
  }
  deleteProduct(id){
    return this.httpClient.delete(environment.url_api+id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comida } from 'src/app/models/comida';



@Injectable({
  providedIn: 'root'
})
export class ComidasService {
  comida: Comida;
  constructor(public httpClient: HttpClient) { }
  getRandomMeal(){
    return this.httpClient.get<any>('https://www.themealdb.com/api/json/v1/1/random.php');
  }


}

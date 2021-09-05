import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from './modules/product';
import { SumaPipePipe } from './pipes/suma/suma-pipe.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  numero1: number;
  numero2: number;
  title = 'arbol-store';
  items=["pepe", "pizza", "milk"]; 
  objetoPrueba:any={
    comida: "Pizza",
    color: "negro",
    musica: "metal",
    hobbie: "Workout"
  };
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 10000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 20000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 50000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 800,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 8550,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: '../assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  addItem(){
    this.items.push("Nuevo elemento");
  }
  deleteItem(index: number){
    this.items.splice(index,1);
  }
  clickProduct(id: Number){
    console.log("product");
    console.log(id);
    
    
  }
  ngOnInit(){
    console.log("Componente cargado");
    console.log(this.objetoPrueba);
    
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Comida } from 'src/app/models/comida';
import { ComidasService } from 'src/app/components/core/services/comidas/comidas.service';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {
  comidaaa: Comida;
  numero1: number;
  numero2: number;
  title = 'arbol-store';
  items = ["pepe", "pizza", "milk"];
  objetoPrueba: any = {
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

  comidasArray: Comida[]=[];
  constructor(public comidasService: ComidasService) {
    //this.fetchUnaComida();
    this.fetchVariasComidas(4, this.comidasArray);
  }
  fetchUnaComida() {
    this.comidasService.getRandomMeal().subscribe(
      meal => {
        this.comidaaa = meal.meals[0];
      });
  }

  fetchVariasComidas(numeroComidas: number, arregloComidas: Comida[]) {
    for (let i = 1; i <= numeroComidas; i++) {
      this.comidasService.getRandomMeal().subscribe(
        meal => {          
          arregloComidas.push(meal.meals[0]);
        });
    }


  }

  addItem() {
    this.items.push("Nuevo elemento");
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }


  ngOnInit(): void {
  }

}

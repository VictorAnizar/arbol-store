import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {
  @Input() comida: Comida;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {


  }

}

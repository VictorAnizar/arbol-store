import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicios';
import { Input } from '@angular/core';
@Component({
  selector: 'app-servicio-card',
  templateUrl: './servicio-card.component.html',
  styleUrls: ['./servicio-card.component.scss']
})
export class ServicioCardComponent implements OnInit {
  @Input() servicio: Servicio;
  constructor() { }

  ngOnInit(): void {
  }

}

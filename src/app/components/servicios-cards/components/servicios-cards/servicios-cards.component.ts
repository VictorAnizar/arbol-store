import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicios';
import { ServicioService } from 'src/app/components/core/services/servicio/servicio.service';
@Component({
  selector: 'app-servicios-cards',
  templateUrl: './servicios-cards.component.html',
  styleUrls: ['./servicios-cards.component.scss']
})
export class ServiciosCardsComponent implements OnInit {

  public servicios: Servicio[];
  constructor(servicioService: ServicioService) { 
    this.servicios=servicioService.getAllServicios();
  }

  ngOnInit(): void {
  }

}

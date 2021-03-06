import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/components/core/services/servicio/servicio.service';
import { Servicio } from 'src/app/models/servicios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public servicios:Servicio[];
  constructor(
    servicioService: ServicioService
  ) {
    this.servicios=servicioService.getAllServicios();

   }

  ngOnInit(): void {
  }

}

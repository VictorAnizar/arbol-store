import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Servicio } from 'src/app/models/servicios';
import { ServicioService } from 'src/app/components/core/services/servicio/servicio.service';
@Component({
  selector: 'app-servicio-detail',
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.scss']
})
export class ServicioDetailComponent implements OnInit {
  public servicio:Servicio;

  constructor(
    private route: ActivatedRoute,
    private servicioService:ServicioService
  ) { 
    this.route.params.subscribe((params:Params)=>{
      this.servicio=servicioService.getServicio(params.id);      
    });
  }

  ngOnInit(): void {
  }

}

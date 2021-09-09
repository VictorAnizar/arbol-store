import { Injectable } from '@angular/core';
import { Servicio } from 'src/app/modules/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public servicios: Servicio[]=[
    {
      id: "1",
      title: "Desarrollo Web",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis maximus purus, quis bibendum erat. Aliquam erat volutpat. Fusce ligula erat, vehicula a mi eu, convallis commodo eros. Donec sit amet euismod magna. Curabitur pharetra orci ut condimentum dapibus. Morbi ex sapien, lobortis quis pretium eu, gravida lacinia sem. Aenean in orci ligula. Praesent vel quam ullamcorper justo malesuada condimentum. Curabitur ultrices elementum turpis, hendrerit tempor enim posuere a. Phasellus lacinia maximus viverra."
      ,image:"assets/images/icons8-web-development-64.png"
    }, 
    {
      id: "2",
      title: "Bases de datos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis maximus purus, quis bibendum erat. Aliquam erat volutpat. Fusce ligula erat, vehicula a mi eu, convallis commodo eros. Donec sit amet euismod magna. Curabitur pharetra orci ut condimentum dapibus. Morbi ex sapien, lobortis quis pretium eu, gravida lacinia sem. Aenean in orci ligula. Praesent vel quam ullamcorper justo malesuada condimentum. Curabitur ultrices elementum turpis, hendrerit tempor enim posuere a. Phasellus lacinia maximus viverra."
      ,image:"assets/images/icons8-copias-de-seguridad-100.png"
    },
    {
      id: "3",
      title: "Servidores",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis maximus purus, quis bibendum erat. Aliquam erat volutpat. Fusce ligula erat, vehicula a mi eu, convallis commodo eros. Donec sit amet euismod magna. Curabitur pharetra orci ut condimentum dapibus. Morbi ex sapien, lobortis quis pretium eu, gravida lacinia sem. Aenean in orci ligula. Praesent vel quam ullamcorper justo malesuada condimentum. Curabitur ultrices elementum turpis, hendrerit tempor enim posuere a. Phasellus lacinia maximus viverra."
      ,image:"assets/images/icons8-grupo-de-servidores-64.png"
    }
  ]
  constructor() { }
  getAllServicios(){
    return this.servicios;
  }
  getServicio(id){
    return this.servicios.find(item => id === item.id);
  }
}

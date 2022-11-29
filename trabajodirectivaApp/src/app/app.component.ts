import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: object[];

    constructor(){
      this.entradas=[
      {titulo:"Phyton cada dia mas presente"},
      {titulo:"Java"},
      {titulo:"JavaScript"},
      {titulo:"Potencia"},
      {titulo:"donde quedo pascal"},

      ]
    }

  registrarUusuario(){
 
  this.registrado=true

    this.mensaje="usuario registrado con exito"
  }
}

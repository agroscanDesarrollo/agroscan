import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  mensaje:string;
  mng=false;
  empleados=[
    {'name':'nombre1',cargo:'obrero'},
    {'name':'nombre2',cargo:'Gerente'},

  ];
  model:any ={};
  constructor()
  {
    this.title="Angular Crud"
    this.mng=false;

  }

  addempleador():void{
    this.empleados.push(this.model);
    this.model={};
    this.mng=true;
    this.mensaje='objeto agregado';
  }
  removeempleador(index):void{

    var respuesta=confirm('Esta seguro de eliminar al empleado: '+this.empleados[index].name);
    if(respuesta){
      this.empleados.splice(index,1);
      this.mng=true;
      this.mensaje='elemento eliminado';
    }

  }
  editempleador():void{

  }

  updateempleador():void{

  }
  alerta(){
    this.mng=false;
  }
}

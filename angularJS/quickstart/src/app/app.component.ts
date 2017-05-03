import { Component } from '@angular/core';

/*
interface Vehiculo {
  ruedas: number;
  pegatinas?: string[];
}*/

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <h2> Y el número de la suerte es: {{numeroDeLaSuerte}}</h2>
    <textarea [rows]="textAreaLineas"></textarea>
    <div [class.caja]="pintamosClase"></div>
    <div [ngClass]="clases"></div>
    <p [style.color]="obtenerColor()">Buenos dias</p>
    <p [ngStyle]="obtenerEstilos()">buenas tardes</p>
    <button (click)="mostrarMensaje()">Mostrar mensaje</button>
    <input [(ngModel)]="mensaje" type="text"/>
    {{ mensaje }}
    `,
  styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `]
})
export class AppComponent  { 
  name: string = 'Babel';

  numeroDeLaSuerte: number = 43;

  textAreaLineas: number = 6;

  pintamosClase: boolean = true;

  clases: any = { uno: true, dos: true};

  constructor() {

  }

  //binding de estilos
  obtenerColor() : string {
    return 'green';
  }

  obtenerEstilos() : any {
    return {
      backgroundColor: 'red', //background-color, sin guiones!!!!
      color: 'white'
    }
  }

  mostrarMensaje() : void {
    alert('Hola señores');
  }

  /*n: number = 0;
  
  constructor() {
    setInterval(() => {
      this.name = 'Babel' + this.n++;
    }, 1000);
  }*/

  /*
  constructor() {
    const coche: Vehiculo = {
      ruedas: 4,
      pegatinas: ['a', 'b']
    }
  }*/


}

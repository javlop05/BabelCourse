import { Component } from '@angular/core';

/*
interface Vehiculo {
  ruedas: number;
  pegatinas?: string[];
}*/

@Component({
    selector: 'ejemplos-binding',
    templateUrl: '/app/ejemplos/ejemplos-binding.component.html',
    styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `]
})

export class EjemplosBindingComponent {
    name: string = 'Babel';

    numeroDeLaSuerte: number = 43;

    textAreaLineas: number = 6;

    pintamosClase: boolean = true;

    clases: any = { uno: true, dos: true };

    mensaje: string = 'Escribe algo';

    constructor() {

    }

    //binding de estilos
    obtenerColor(): string {
        return 'green';
    }

    obtenerEstilos(): any {
        return {
            backgroundColor: 'red', //background-color, sin guiones!!!!
            color: 'white'
        }
    }

    mostrarMensaje(): void {
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
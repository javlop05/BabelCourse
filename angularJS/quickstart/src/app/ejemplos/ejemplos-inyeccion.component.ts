import { Component, Injectable } from '@angular/core';

//Inyeccion de dependencias usando decorado
@Injectable()
export class Servicio1 {
    obtenerMensaje() { return "Soy un servicio decorado con @Injectable"; }
};

//No es una buena practica tener mas de una clase en un mismo fichero component.ts

export class Servicio2 {
    obtenerMensaje() { return "Soy un servicio que usa proveedor de clase"; }
};


export const Servicio2Provider = {
    provide: Servicio2,
    useClass: Servicio2
};

@Component({
    selector: 'ejemplos-inyeccion',
    templateUrl: '/app/ejemplos/ejemplos-inyeccion.component.html'
})

export class EjemplosInyeccionComponent {
    
    mensaje1: string;
    mensaje2: string;

    constructor(
        private _servicio1: Servicio1, 
        private _servicio2: Servicio2) { }

    ngOnInit() {
        this.mensaje1 = this._servicio1.obtenerMensaje();
        this.mensaje2 = this._servicio2.obtenerMensaje();
    }
}
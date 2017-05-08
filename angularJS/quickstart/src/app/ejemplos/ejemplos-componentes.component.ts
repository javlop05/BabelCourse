import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-componentes',
    templateUrl: './ejemplos-componentes.component.html'
})

export class EjemplosComponentesComponent {
    escribirMensaje(mensaje: string) {
        console.log(mensaje);
    }
}

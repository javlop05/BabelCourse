import { Component } from '@angular/core';

@Component({
    selector: 'ejemplos-pipe',
    template: `
        <div>
            <strong>Pipa de Fechas:</strong> 
            {{ fecha | date: 'dd/mm/yyyy' }} <br>

            <strong>Pipa de Moneda:</strong> 
            {{ precio | currency: 'EUR' }} <br>

            <strong>Pipa de Texto:</strong>
            {{ texto | titlecase }} <br>

            <strong>Pipa de Json:</strong>
            <pre> {{ objeto | json }} </pre>

        </div>
    `
})
export class EjemplosPipeComponent {

    fecha: Date = new Date();

    precio: number = 34.95;

    texto: string = "Texto que estaba en minúsculas";

    objeto: any = {
        selector: 'aaaa',
        zzz: 222,
        fecha: new Date()
    };

}
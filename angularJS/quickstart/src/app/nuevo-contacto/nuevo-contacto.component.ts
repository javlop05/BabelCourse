import { Component } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    // No hace falta selector porque lo voy a usar como una página
    template: `
        <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>
        `
})

export class NuevoContactoComponent {

    constructor(private _contactosService: ContactosService) { }

    guardarContacto(contacto: Contacto) {
        this._contactosService.guardarContacto(contacto)
            .subscribe(contacto => {
                alert('creado');
            });
    }
}
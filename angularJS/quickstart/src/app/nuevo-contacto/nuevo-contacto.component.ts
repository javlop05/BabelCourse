import { Component } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
import { Router } from '@angular/router';

@Component({
    // No hace falta selector porque lo voy a usar como una página
    template: `
        <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>
        `
})

export class NuevoContactoComponent {

    constructor(
        private _contactosService: ContactosService,
        private _router: Router
    ) { }

    guardarContacto(contacto: Contacto) {
        this._contactosService.guardarContacto(contacto)
            .subscribe(contacto => {
                this._router.navigate(['mis-contactos']);
            });
    }
}
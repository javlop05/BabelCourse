import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    // No hace falta selector porque lo voy a usar como una página
    templateUrl: './mis-contactos.component.html'
})

export class MisContactosComponent implements OnInit {
    listaContactos: Contacto[];

    contactoSeleccionado: Contacto;

    constructor(
        private _contactosService: ContactosService,
        private _activatedRoute: ActivatedRoute
        ) { }

    ngOnInit(): void {
        // this._contactosService.obtenerContactos()
        //     .subscribe(contactos => {
        //         this.listaContactos = contactos;
        //     });
        //this._activatedRoute.data.forEach((data: any) => {
        this._activatedRoute.data.forEach((data: { contactos: Contacto[] }) => {
            this.listaContactos = data.contactos;
        });
    }

    mostrarDetalles(contacto: Contacto): void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string) {
        console.log(ruta);
        window.open(ruta, '_blank');
    }

    eliminarContacto(contacto: Contacto) {
        if (confirm(`Estas seguro que quieres eliminar a ${contacto.nombre}`)) {
            this._contactosService.eliminarContacto(contacto)
                .subscribe(() => {
                    // Busco el contacto en la lista para eliminarlo
                    const indice: number = 
                        this.listaContactos.findIndex(
                            (c: Contacto) => c.id === contacto.id
                        );
                    
                    if (indice != -1) {
                        this.listaContactos.splice(indice, 1);
                        this.contactoSeleccionado = null;
                    }
                });
        }
    }
}
import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ContactosService } from './contactos.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactosResolveService implements Resolve<Contacto[]> {
    
    constructor(private _contactosService: ContactosService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Contacto[]> {
        return this._contactosService.obtenerContactos();
    }

}
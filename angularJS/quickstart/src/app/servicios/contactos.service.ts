import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

    constructor(private _http: Http) {}

    private _contactos: Contacto[] = [];
        
    obtenerContactos(): Observable<Contacto[]> {
        return this._http
                   .get('http://localhost:3004/contactos')
                   .map(res => {
                       // Obtengo la lista de objetos que viene en el body
                       const lista: any[] = res.json();
                       // Creo una lista de contactos y los devuelvo
                       lista.map(elemento => {
                            return Contacto.desdeJSON(elemento);
                       });
                       return lista;
                   });
    }

    guardarContacto(contacto: Contacto) : Observable<Contacto> {
        return this._http
                   .post('http://localhost:3004/contactos', contacto)
                   .map(res => Contacto.desdeJSON(res.json()));
    }
}
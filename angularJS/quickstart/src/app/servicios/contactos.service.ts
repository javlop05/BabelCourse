import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

    obtenerContactos(): Contacto[] {
        return [
            Contacto.desdeJSON({
                id: 1,
                nombre: 'Steve',
                apellidos: 'Jobs',
                email: 'steve.jobs@apple.com',
                telefono: '643548645',
                twitter: '@stevejobs',
                facebook: 'stevejobs',
                avatar: ''
            }),
            Contacto.desdeJSON({
                id: 2,
                nombre: 'Bill',
                apellidos: 'Gates',
                email: 'bill.gates@microsoft.com',
                telefono: '8674538747',
                twitter: '@billgates',
                facebook: 'billgates',
                avatar: ''
            }),
            Contacto.desdeJSON({
                id: 3,
                nombre: 'Elon',
                apellidos: 'Musk',
                email: 'elon.musk@tesla.com',
                telefono: '53786745655',
                twitter: '@elonmusk',
                facebook: 'elonmusk',
                avatar: ''
            })
        ];
    }
}
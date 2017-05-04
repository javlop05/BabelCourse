import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

    obtenerContactos(): Contacto[] {
        return [
            {
                nombre: 'Steve Jobs',
                email: 'steve.jobs@apple.com',
                telefono: '643548645'
            },
            {
                nombre: 'Bill Gates',
                email: 'bill.gates@microsoft.com',
                telefono: '8674538747'
            },
            {
                nombre: 'Elon Musk',
                email: 'elon.musk@tesla.com',
                telefono: '53786745655'
            }
        ];
    }
}
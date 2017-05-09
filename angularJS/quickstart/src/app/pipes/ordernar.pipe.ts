import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Pipe({ name: 'ordenar' })

export class OrdenarPipe implements PipeTransform {

    //Con transform creamos un nuevo dato y lo retornamos 
    //No alteramos el original
    transform(contactos: Contacto[]) {
        contactos.sort((contacto1, contacto2): number => {
            const nombreCompleto1 = `${contacto1.nombre}${contacto1.apellidos}`.toLowerCase();
            const nombreCompleto2 = `${contacto2.nombre}${contacto2.apellidos}`.toLowerCase();

            //Si el primero es mayor que el segundo devolvemos 1
            if (nombreCompleto1 > nombreCompleto2) 
                return 1;

            //Si el segundo es mayor que el primero devolvemos -1
            if (nombreCompleto1 < nombreCompleto2) 
                return -1;

            //Si son iguales devolvemos 0
            return 0;
        });
        return contactos;
    }

}
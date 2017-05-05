import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Contacto } from '../entidades/contacto';

@Component({
    selector: 'formulario-contacto',
    templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
    styleUrls: ['app/formulario-contacto/formulario-contacto.component.css']
})

export class FormularioContactoComponent {

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    guardarContacto(contactoForm: FormGroup) {
        const contacto: Contacto = Contacto.desdeJSON(contactoForm.value);
        this.formularioAceptado.emit(contacto);
    }
}
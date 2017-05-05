import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
    selector: 'formulario-contacto',
    templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
    styleUrls: ['app/formulario-contacto/formulario-contacto.component.css']
})

export class FormularioContactoComponent {

    guardarContacto(contactoForm: FormGroup) {
        console.log(contactoForm);
    }
}
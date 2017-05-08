import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
    selector: 'formulario-contacto',
    templateUrl: './formulario-contacto.component.html',
    styleUrls: ['./formulario-contacto.component.css']
})

export class FormularioContactoComponent implements OnInit {

    @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

    rutaAvatar: string = '';

    constructor(private _contactosService: ContactosService) { }

    ngOnInit(): void {
        this._contactosService.generarRutaAvatar()
                              .subscribe(ruta => {
                                this.rutaAvatar = ruta;
                              });
    }

    guardarContacto(contactoForm: FormGroup) {
        const contacto: Contacto = Contacto.desdeJSON(contactoForm.value);
        contacto.avatar = this.rutaAvatar;
        this.formularioAceptado.emit(contacto);
    }
}
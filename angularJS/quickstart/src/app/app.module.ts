import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent } from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent } from './ejemplos/ejemplos-componentes.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { Servicio1, Servicio2, EjemplosInyeccionComponent, Servicio2Provider } from './ejemplos/ejemplos-inyeccion.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

@NgModule({
  imports: [  // Metemos todos los modulos que necesita mi app
    BrowserModule,
    FormsModule
  ],
  declarations: [ // Metemos todos los componentes, directivas y pipes
     AppComponent,
     CajaComponent,
     EjemplosBindingComponent,
     EjemplosComponentesComponent,
     ListaContactosComponent,
     DetallesContactoComponent,
     EjemplosInyeccionComponent,
     FormularioContactoComponent
  ],
  providers: [ // Metemos los servicios
    ContactosService,
    Servicio1, // Este tiene @Injectable
    Servicio2Provider
  ],
  bootstrap: [ // Componente raiz de nuestra app
    AppComponent 
  ]
})

export class AppModule { }

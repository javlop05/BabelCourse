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
     DetallesContactoComponent
  ],
  providers: [ // Metemos los servicios
    ContactosService
  ],
  bootstrap: [ // Componente raiz de nuestra app
    AppComponent 
  ]
})

export class AppModule { }

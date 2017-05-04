import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CajaComponent } from './caja.component';

@NgModule({
  imports: [  // Metemos todos los modulos que necesita mi app
    BrowserModule,
    FormsModule
  ],
  declarations: [ // Metemos todos los componentes, directivas y pipes
     AppComponent,
     CajaComponent
  ],
  providers: [ // Metemos los servicios
  
  ],
  bootstrap: [ // Componente raiz de nuestra app
    AppComponent 
  ]
})
export class AppModule { }

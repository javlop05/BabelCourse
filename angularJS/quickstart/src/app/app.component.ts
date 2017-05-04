import { Component, OnInit } from '@angular/core';
import { Contacto } from './entidades/contacto';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})

export class AppComponent implements OnInit {

  listaContactos: Contacto[];

  ngOnInit(): void {
     this.listaContactos =  [
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

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var contactos_service_1 = require("../servicios/contactos.service");
var NuevoContactoComponent = (function () {
    function NuevoContactoComponent(_contactosService) {
        this._contactosService = _contactosService;
    }
    NuevoContactoComponent.prototype.guardarContacto = function (contacto) {
        this._contactosService.guardarContacto(contacto)
            .subscribe(function (contacto) {
            alert('creado');
        });
    };
    return NuevoContactoComponent;
}());
NuevoContactoComponent = __decorate([
    core_1.Component({
        // No hace falta selector porque lo voy a usar como una página
        template: "\n        <formulario-contacto (formularioAceptado)=\"guardarContacto($event)\"></formulario-contacto>\n        "
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactosService])
], NuevoContactoComponent);
exports.NuevoContactoComponent = NuevoContactoComponent;
//# sourceMappingURL=nuevo-contacto.component.js.map
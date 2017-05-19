import { Inject, Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { BackendUri } from "./settings.service";
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UsersService } from 'app/services/users.service';


@Injectable()
export class AuthenticationService {

    authenticated: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private _router: Router,
        private _usersService: UsersService) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['/login']);
        this.authenticated.emit(false);
    }

    login(email, password) {
        this._usersService.findUser(email, password).subscribe(
            (user) => {
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                    this._router.navigate(['/']);
                    this.authenticated.emit(true);
                }
            },
            (err) => console.error('login incorrecto'), 
        );
    }

    checkCredentials(): boolean {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['/login']);
            return false;
        }
        this._router.navigate(['/']);
        return true;
    }

    getAuthEmitter(): EventEmitter<boolean> {
        return this.authenticated;
    }
}
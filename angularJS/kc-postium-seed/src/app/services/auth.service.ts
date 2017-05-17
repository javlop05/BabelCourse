import { Inject, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { BackendUri } from "./settings.service";
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {

    constructor(
        private _router: Router,
        private _http: Http,
        @Inject(BackendUri) private _backendUri: any) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['/login']);
    }

    login(email, password) {
        this.findUser(email, password).subscribe(
            (user) => {
                console.log(user);
                if (user) {
                    localStorage.setItem("user", user.email);
                    this._router.navigate(['/']);
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

    private findUser(email: string, password: string): Observable<User> {
        return this._http
            .get(`${this._backendUri}/users?email=${email}&password=${password}`)
            .map((response: Response) => User.fromJson(response.json()));
    }
}
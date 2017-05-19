import { Inject, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { BackendUri } from "./settings.service";
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable()
export class UsersService {

    constructor(
        private _http: Http,
        @Inject(BackendUri) private _backendUri: any) { }

    public findUser(email: string, password: string): Observable<User> {
        return this._http
            .get(`${this._backendUri}/users?email=${email}&password=${password}`)
            .map((response: Response) => {
                return User.fromJson(response.json()[0]);
            });
    }

    public createUser(user: User): Observable<User> {
        return this._http
             .post(`${this._backendUri}/users`, user)
            .map((response: Response) => User.fromJson(response.json()));
    }
}
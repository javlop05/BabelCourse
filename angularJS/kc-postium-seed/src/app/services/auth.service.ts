import { Injectable } from '@angular/core';
import { Router } from "@angular/router";


@Injectable()
export class AuthenticationService {

    constructor(
        private _router: Router) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['/login']);
    }

    login(user): boolean {
        var authenticatedUser;// = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", authenticatedUser);
            this._router.navigate(['/']);
            return true;
        }
        return false;

    }

    checkCredentials(): boolean {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/auth.service';

@Component({
    selector: "app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    logged: boolean = false;

    constructor(private _authService: AuthenticationService) { }

    ngOnInit(): void {
        this.logged = this._authService.checkCredentials();
    }

 }

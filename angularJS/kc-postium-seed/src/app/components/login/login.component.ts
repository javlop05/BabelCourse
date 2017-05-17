import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private _authService: AuthenticationService) { }

    ngOnInit(): void {
        this._authService.checkCredentials();
    }

    login(loginForm: FormGroup) {
        this._authService.login(loginForm.value.email, loginForm.value.password);
    }
}
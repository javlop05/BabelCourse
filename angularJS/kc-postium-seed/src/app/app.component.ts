import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy{

    logged: boolean = false;
    subscription: Subscription;

    constructor(private _authService: AuthenticationService) { }

    ngOnInit(): void {
        this.logged = this._authService.checkCredentials();
        this.subscription = this._authService.getAuthEmitter().subscribe((logged) => this.logged = logged);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

 }

import { Component } from "@angular/core";
import { Post } from '../../models/post';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';

@Component({
    selector: "header-bar",
    templateUrl: "header-bar.component.html",
    styleUrls: ["header-bar.component.css"]
})
export class HeaderBarComponent {

    constructor(
        private _router: Router,
        private _authService: AuthenticationService) {}

    searchPosts(filter: string) {
        this._router.navigate([`posts/search/${filter}`]);
    }

    logout() {
        this._authService.logout();
    }
 }

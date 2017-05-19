import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.css']
})
export class RegisterComponent {

  constructor(
    private _usersService: UsersService,
    private _authService: AuthenticationService) { }

  register(form: FormGroup) {

    let user: User = User.fromJson(form.value);

    user.email = (user.email) ? user.email : null;
    user.password = (user.password) ? user.password : null;
    user.username = (user.username) ? user.username : null;
    user.name = (user.name) ? user.name : null;
    user.avatar = (user.avatar) ? user.avatar : "assets/images/default.jpg";

    this._usersService.createUser(user).subscribe((data) => this._authService.login(data.email, data.password));
  }

}

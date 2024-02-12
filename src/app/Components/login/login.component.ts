import { Component } from '@angular/core';
import { IUser } from '../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: IUser;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.user = { username: '', password: '' };
  }

  onSubmit() {
    this.authService.login(this.user).subscribe((data) => {
      if (data.length > 0) {
        localStorage.setItem('user', JSON.stringify(data[0]));
        this.userService.setUser(data[0]);
      } else {
        alert('Login failed');
      }
    });
  }
}

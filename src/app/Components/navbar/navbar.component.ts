import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { IUser } from '../../Models/iuser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  routes = [
    { title: 'Home', route: '' },
    { title: 'Sign Up', route: '/signup' },
    { title: 'Sign In', route: '/signin' },
    { title: 'Profile', route: '/profile' },
  ];

  user!: IUser;
  constructor(private userService: UserService) {
    this.userService.globalUserSubject.subscribe((data) => {
      this.user = data;
    });
  }
}

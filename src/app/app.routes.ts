import { Routes } from '@angular/router';
import { SignupComponent } from '../Components/signup/signup.component';
import { LoginComponent } from '../Components/login/login.component';
import { HomeComponent } from '../Components/home/home.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { PostComponent } from '../Components/post/post.component';
import { authGuard } from '../Guards/auth.guard';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      id: ['', Validators.required],
    });

    const userId = this.userService.getUser().id || '';

    this.authService.getUserFromApi(userId).subscribe((user) => {
      this.formGroup.patchValue(user);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  formGroub!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formGroub = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
    });
  }

  getInput(key: string) {
    return this.formGroub.get(key);
  }

  onSubmit(): void {
    this.authService.register(this.formGroub.value).subscribe(() => {
      console.log('first');
    });
  }
}

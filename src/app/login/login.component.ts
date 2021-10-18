import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {createPasswordStrengthValidator} from '../validators/password-strength.validator'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

   form = this.fb.group({
      email: ['', {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur'
      }],
      password: ['', [Validators.required, Validators.minLength(8),
                        createPasswordStrengthValidator()]]
   });

  constructor(private fb: FormBuilder) {


  }

  ngOnInit() {

  }

  get email() {
      return this.form.controls['email'];
  }

  get password() {
      return this.form.controls['password'];
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';
import { MatDialog } from '@angular/material/dialog';
import { PopUpBoxComponent } from '../pop-up-box/pop-up-box.component';
import { UserRegistrationService } from '../services/user-registration.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  resultMessage: any = {message: 'This went well'};
  regUser: object = {};
  package: object = {}

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      },
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator(),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private UserRegistrationService: UserRegistrationService
  ) {}

  //ngOnInit has already the http variable runs after constructor
  ngOnInit() {}

  get name() {
    return this.form.controls['name'];
  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  // postData() {
     
///RXJS
  //   this.UserRegistrationService.registerUsers(this.form.value).subscribe(
  //     (val: any) => {
  //       this.regUser = val;
  //       this.package = {...this.regUser, ...this.resultMessage}
  //       this.putUser(this.package);
  //     },
  //     (error) => {
  //       this.resultMessage.message = error
  //       this.package = {...this.regUser, ...this.resultMessage}; 
  //       this.putUser(this.package);
  //     }
  //   );
  // }

///PROMISE
  // postData() {
  //   this.regUser = this.form.value; 
  //   const res: any = this.UserRegistrationService.registerUsers(this.form.value)
  //     .toPromise()
  //     .then(val =>{
  //       this.package = {...this.regUser, ...this.resultMessage}
  //       this.putUser(this.package);
  //     })
  //     .catch(error => {
  //       this.resultMessage.message = error
  //       this.package = {...this.regUser, ...this.resultMessage}; 
  //       this.putUser(this.package);
  //   });
  // }

///JS ASYNC AWAIT IN USER-REG-SERVICE
  postData(){
    this.UserRegistrationService.registerUsers(this.form.value)
    .then((val)=>{
      this.regUser = val;
      this.package = {...this.regUser, ...this.resultMessage}
      this.putUser(this.package);
    })
    .catch((error)=>{
      this.resultMessage.message = error
      this.package = {...this.regUser, ...this.resultMessage}; 
      this.putUser(this.package);
    })
  }

  putUser(user: any) {
    this.dialog.open(PopUpBoxComponent, {
      data: user,
    });
  }
}

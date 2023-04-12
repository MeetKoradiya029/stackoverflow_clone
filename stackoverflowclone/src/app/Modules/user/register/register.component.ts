import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //#region
  registerForm!: FormGroup;
  body: any;
  //#endregion
  constructor(private userService: UserService,private router:Router) {}
  ngOnInit() {
    this.formInitialize();
  }
  formInitialize() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  submit() {
    let flag = true;
    let { firstname, lastname, email, password, confirmpassword } =
      this.registerForm.getRawValue();
    // console.log("form first name",firstname);

    this.body = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };

    if (!firstname || !lastname || !email || !password || !confirmpassword) {
      alert('Complete form !!');
      return (flag = false);
    }
    if ((flag = true)) {
      this.userService._registerUser(this.body).subscribe({
        next: (res) => {
          if (res) {
            console.log('response', res);
            this.registerForm.reset();
            this.router.navigate(['/users/login']);

          }
        },
        error: (error) => {
          console.log('error resgister', error);
        },
      });
    }
    return flag
  }
}

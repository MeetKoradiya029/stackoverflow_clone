import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //#region 
  loginForm!: FormGroup;
  userData:any=[]
  data:any={};
  //#endregion

  constructor(private userService:UserService){}

  ngOnInit() {
    this.getUserData();
    this.formInitialize();
    
  }

  formInitialize() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")
      ]),
    });
  }

  submit(){
    let flag=true;
    let {email,password} = this.loginForm.getRawValue();
    let exisiting_user = this.userData.find((user:any)=>user.email==email && user.password==password);
    
    this.data = {
      email:email,
      password:password
    }

    if(!email||!password){
      alert("form is empty");
      return (flag=false);
    }

    if(flag=true){

      if(exisiting_user){
          alert("login successfull");
          localStorage.setItem("loggedInUser",JSON.stringify(exisiting_user));
          return (flag=true);       
      }else{
        alert("Invalid username or password!");
        return (flag=false);
      }
    }
    return flag;
  }

  getUserData(){
    this.userService._getRegisterUsers().subscribe({next:(res)=>{
      if(res){
        console.log("user Data found ---",res);
        this.userData = res;
      }
    },error:(error)=>{
      console.log("get user details error",error);
      
    }})
  }
}

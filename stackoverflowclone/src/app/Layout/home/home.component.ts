import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;
  constructor(private router:Router, private userService:UserService){

  }
  ngOnInit() {
    this.getUserData();
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

  askQuestion(){

    let user = JSON.parse(localStorage.getItem('loggedInUser'));

    if(user){
        this.router.navigate(['/users/question']);
    }else{
      alert("please login to ask a question")
    }

  }

}

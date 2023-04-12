import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from 'src/app/Modals/question';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  //#region
  questionForm: FormGroup;
  userData: any;
  currentdate = new Date();
  datetime =
    this.currentdate.getDay() +
    '/' +
    this.currentdate.getMonth() +
    '/' +
    this.currentdate.getFullYear() +
    ' @ ' +
    this.currentdate.getHours() +
    ':' +
    this.currentdate.getMinutes() +
    ':' +
    this.currentdate.getSeconds();
  //#endregion
  constructor(
    private userService: UserService,
    private apiService: ApiService
  ) {
    this.formInitialize();
  }
  ngOnInit() {
    
    this.getUserData();
  }

  formInitialize() {
    this.questionForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        
        // Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$")
      ]),
    });
  }

  submit() {
    let { title, description } = this.questionForm.getRawValue();
    let loginData = JSON.parse(localStorage.getItem('loggedInUser'));

    console.log("form data",title);
    
    if (this.userData) {
      let user = this.userData.find(
        (user: any) => user.email == loginData.email
      );
      console.log('logged IN User', user);

      let questionBody: Question = {
        userId: user.id,
        title: title,
        body: description,
        createdAt: this.datetime,
        answers: [],
      };
      console.log('question body', questionBody);
      this.apiService.addQuestion(questionBody).subscribe({
        next: (res) => {
          if(res){
            console.log("Post question response:---",res);
            
          }
        },
        error: (error) => {
          if (error) {
            console.log('post question error', error);
          }
        },
      });
    }
  }
  getUserData() {
    this.userService._getRegisterUsers().subscribe({
      next: (res) => {
        if (res) {
          console.log('user Data found ---', res);
          this.userData = res;
        }
      },
      error: (error) => {
        console.log('get user details error', error);
      },
    });
  }
}

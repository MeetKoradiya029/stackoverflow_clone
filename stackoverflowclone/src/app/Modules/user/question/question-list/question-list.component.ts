import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  //#region
  userData: any = [];
  questions:any=[];
  filtered_ques:any;
  enteredAnswer:any;
  //#endregion
  constructor(
    private userService: UserService,
    private apiService: ApiService
  ) {
    this.getUserData();
  }
  ngOnInit() {
      this.getQuestions();

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

  getQuestions() {
    this.apiService
      .getAllQuestions()
      .subscribe({ next: (res) => {
          if(res){
            console.log("All questions",res);
            this.questions = res;
            let user = JSON.parse(localStorage.getItem("loggedInUser"));
            let current_user = this.userData.find((user:any)=>user.email==user.email);
            
            this.filtered_ques=this.questions.filter((q:any)=>q.userId==current_user.id);
            console.log("Current user questions",this.filtered_ques);
            
          }
      }, error: (error) => {
          console.log("get All questions errror:-",error);
          
      } });
  }


  submit(question:any){

      let body = {
        id:1,
        body:this.enteredAnswer,
        createdAt:Date.now(),
        userId:this.userData.id,
      }
      this.apiService.post_Answer(question.id,body).subscribe((res)=>{
        
      })
  }
}

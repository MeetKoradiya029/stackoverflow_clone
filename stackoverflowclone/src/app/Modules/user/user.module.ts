import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDetailsComponent } from './question/question-details/question-details.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    QuestionComponent,
   
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }

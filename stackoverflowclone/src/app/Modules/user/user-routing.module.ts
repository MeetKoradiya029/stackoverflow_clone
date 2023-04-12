import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from 'src/app/app.component';
import { QuestionComponent } from './question/question.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  { 
  path: 'login', 
  component: LoginComponent 
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'question',
    component:QuestionComponent,
    canActivate:[AuthGuard],
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

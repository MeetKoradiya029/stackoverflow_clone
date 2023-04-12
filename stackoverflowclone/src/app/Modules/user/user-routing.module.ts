import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from 'src/app/app.component';

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
    path:"",
    component:AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

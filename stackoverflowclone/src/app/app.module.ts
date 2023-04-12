import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Layout/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './Modules/user/user.module';
import { QuestionListComponent } from './Modules/user/question/question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

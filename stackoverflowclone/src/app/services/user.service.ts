import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //#region 
  baseURL = environment.baseUrl;
  registerUser = environment.postUser;
  getUsersUrl = environment.getUser;
  //#endregion

  constructor(private http:HttpClient) { }

  _registerUser(body:any){
    try {
      return this.http.post<any>(this.baseURL+this.registerUser,body)
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }

  _getRegisterUsers(){
    try {
      return this.http.get<any>(this.baseURL+this.getUsersUrl);
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }

}

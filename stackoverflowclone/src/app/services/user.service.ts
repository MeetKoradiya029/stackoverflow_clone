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
  //#endregion

  constructor(private http:HttpClient) { }

  _registerUser(body:any){
    try {
      return this.http.post<any>(this.baseURL+this._registerUser,body)
    } catch (error:any) {
      return throwError(()=>new Error(error))
    }
  }

}

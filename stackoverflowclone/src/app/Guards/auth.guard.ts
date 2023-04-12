import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  checkUser(){
    let flag=true;
    let user = localStorage.getItem("loggedInUser");
    if(user){
      return (flag=true);
    }else{
      return (flag=false);
    }
  
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.checkUser()){
        return true;
      }else{
          this.router.navigate(['/users/login']);
          return false;
      }

  
  }
  
}

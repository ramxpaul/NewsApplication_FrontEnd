import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

/*
the logic is to insure that token is already used so if u pressed logout it will gonna
delete token in DB and local storage , when u did that u cant navigate any routers that u protect it 
*/  

export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthService , private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.getToken()){
      return true
    }
    this.router.navigate(['/'])
    return false
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn !== true && state.url === "/home") {
        window.alert("Access not allowed!");
        this.router.navigate(['log-in'])
      }

      if (this.authService.isLoggedIn == true && state.url === "/log-in") {
        this.router.navigate(['home'])
      }
      console.log("mrn",state)
      return true;
    }
}

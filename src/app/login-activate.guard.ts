import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('jwt-token');
    console.log(token);
    if (token != null) {
      console.log(localStorage.getItem('jwt-token'))
      return true;
    }
    this.router.navigate(['welcome']);
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AuthService} from "./auth.service";
import {catchError, mapTo} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user().pipe(
      mapTo(true),
      catchError(() => {
        this.router.navigate(['login']).then()
        return of(false)
      })
    );
  }

}

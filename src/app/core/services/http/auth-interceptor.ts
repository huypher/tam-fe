import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements  HttpInterceptor {

  constructor(
    private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const authReq = this.attachToken(req)
    return next.handle(authReq)
  }

  private attachToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.authService.loadToken()
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}

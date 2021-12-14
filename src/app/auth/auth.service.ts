import {Injectable} from "@angular/core";
import {ConfigService} from "../core/services/configs/config.service"
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl: string = this.cfg.baseUrl

  constructor(
    private httpClient: HttpClient,
    private cfg: ConfigService) {
  }

  public loadToken(): string {
    const token = localStorage.getItem("jwt_token")
    if (token === null) {
      return ''
    }
    return token
  }

  public persistToken(token: string) {
    localStorage.setItem("jwt_token", token)
  }

  public user(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/user`, {observe: `response`})
  }
}

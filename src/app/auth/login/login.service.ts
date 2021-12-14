import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../core/services/configs/config.service";
import {Observable} from "rxjs";
import {LoginReqBody, LoginResp} from "./types";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  baseUrl: string = this.cfg.baseUrl

  constructor(
    private httpClient: HttpClient,
    private cfg: ConfigService) {}

  public login(body: LoginReqBody) {
    return this.httpClient.post<LoginResp>(`${this.baseUrl}/auth/login`, body, {observe: `response`})
  }
}

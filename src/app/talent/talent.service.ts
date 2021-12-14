import {Injectable} from "@angular/core";
import {ConfigService} from "../core/services/configs/config.service"
import {HttpClient} from "@angular/common/http";
import {GetTalentListResp} from "./list/types";
import {AddTalentReq, AddTalentResp, UpdateTalentReq, UpdateTalentResp} from "./talent-new/types";

@Injectable({
  providedIn: 'root'
})

export class TalentService {
  baseUrl: string = this.cfg.baseUrl

  constructor(
    private httpClient: HttpClient,
    private cfg: ConfigService) {
  }

  public getTalentList() {
    return this.httpClient.get<GetTalentListResp>(`${this.baseUrl}/talents`, {observe: `response`})
  }

  public addTalent(body: AddTalentReq) {
    return this.httpClient.post<AddTalentResp>(`${this.baseUrl}/talent`, body,{observe: `response`})
  }

  public updateTalent(id: number, body: UpdateTalentReq) {
    return this.httpClient.put<UpdateTalentResp>(`${this.baseUrl}/talent/${id}`, body,{observe: `response`})
  }
}

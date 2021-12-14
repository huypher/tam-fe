import {Talent} from "../types";

export interface GetTalentListReq {
  full_name: string,
  page_id: number,
  per_page: number,
}

export interface GetTalentListResp {
  data: {talents: Array<Talent>},
  verdict: string,
  message: string,
}

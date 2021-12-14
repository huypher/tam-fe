export interface LoginReqBody {
  username: string
  password: string
}

export interface LoginResp {
  data: {token: string}
}

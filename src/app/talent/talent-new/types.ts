import {FormGroup} from "@angular/forms";
import {Talent} from "../types";

export interface AddTalentReq {
  full_name: string,
  gender: string,
  birthdate: string,
  phone: string,
  email: string,
  applied_position: string,
  level: string,
  department: string,
  project: string,
  cv: string,
  criteria: string,
  scheduled_interview: Date,
  interview_result: string,
  interviewer: string,
  note: string,
}

export interface AddTalentResp {
  data: null,
  verdict: string,
  message: string,
}

export function formToAddTalentReq(form: FormGroup): AddTalentReq {
  return {
    full_name: form.get("full_name")?.value,
    gender: form.get("gender")?.value,
    birthdate: form.get("birthdate")?.value,
    phone: form.get("phone")?.value,
    email: form.get("email")?.value,
    applied_position: form.get("applied_position")?.value,
    level: form.get("level")?.value,
    department: form.get("department")?.value,
    project: form.get("project")?.value,
    cv: form.get("cv")?.value,
    criteria: form.get("criteria")?.value,
    scheduled_interview: form.get("scheduled_interview")?.value,
    interview_result: form.get("interview_result")?.value,
    interviewer: form.get("interviewer")?.value,
    note: form.get("note")?.value,
  }
}

//-------------------------------------------

export interface UpdateTalentReq {
  full_name: string,
  gender: string,
  birthdate: string,
  phone: string,
  email: string,
  applied_position: string,
  level: string,
  department: string,
  project: string,
  cv: string,
  criteria: string,
  scheduled_interview: Date,
  interview_result: string,
  interviewer: string,
  note: string,
}

export interface UpdateTalentResp {
  data: null,
  verdict: string,
  message: string,
}

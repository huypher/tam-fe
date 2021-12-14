import {FormGroup} from "@angular/forms";

export interface Talent {
  id: number,
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
  created_at: Date,
  updated_at: Date,
}

export function newTalent(): Talent {
  return {
    id: 0,
    full_name: '',
    gender: '',
    birthdate: '',
    phone: '',
    email: '',
    applied_position: '',
    level: '',
    department: '',
    project: '',
    cv: '',
    criteria: '',
    scheduled_interview: new Date(),
    interview_result: '',
    interviewer: '',
    note: '',
    created_at: new Date(),
    updated_at: new Date(),
  }
}

export function formToTalent(form: FormGroup): Talent {
  return {
    id: form.get("id")?.value,
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
    created_at: form.get("created_at")?.value,
    updated_at: form.get("updated_at")?.value,
  }
}

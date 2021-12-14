import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {LoginService} from "./login.service";
import {LoginReqBody, LoginResp} from "./types";
import {ErrorResp} from "../../core/services/http/types";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loginWarning: string = ''

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    if (this.validateForm.valid) {
      this.login()
    }
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.checkLogin()) {
      this.redirect()
    }

    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  checkLogin(): boolean {
    const token = this.authService.loadToken()
    if (token == null || token === '') {
      return false
    }
    return true
  }

  redirect() {
    let redirect = this.route.snapshot.paramMap.get('redirect')
    if (redirect === null) {
      redirect = 'talent'
    }
    this.router.navigate([redirect]).then()
  }

  login() {
    const body: LoginReqBody = {
      username: String(this.validateForm.get('userName')?.value),
      password: String(this.validateForm.get('password')?.value),
    }

    this.loginService.login(body).subscribe(resp => {
      const token = resp.body?.data.token || ''
        this.authService.persistToken(token)
        this.redirect()
    }, err => {
      console.log((err.error as ErrorResp).message)
      this.loginWarning = (err.error as ErrorResp).message
    })
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formToTalent, newTalent, Talent} from "../types";
import {TalentService} from "../talent.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {formToAddTalentReq} from "./types";

@Component({
  selector: 'app-talent-new',
  templateUrl: './talent-new.component.html',
  styleUrls: ['./talent-new.component.css']
})
export class TalentNewComponent implements OnInit {
  @Input() isVisible: boolean = false
  @Input() action: string = ""
  @Output() canceled = new EventEmitter<boolean>()
  @Output() reload = new EventEmitter<boolean>()
  validateForm!: FormGroup;
  talent: Talent = newTalent()

  constructor(private talentService: TalentService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({});
  }

  createTalent() {
    console.log("this.validateForm", this.validateForm)
    const body = formToAddTalentReq(this.validateForm)
    console.log("body", body)
    this.talentService.addTalent(body).subscribe(
      resp => this.reload.emit(true),
      error => console.log("create talent error", error)
    )
  }

  updateTalent() {
    this.talent = formToTalent(this.validateForm)
  }

  handleOk(action: string) {
    console.log("handle ok, action:", action)
    switch (action) {
      case "create":
        this.createTalent()
        break;
      case "update":
        this.updateTalent()
        break;
    }
  }

  handleCancel() {
    this.canceled.emit(true)
  }
}

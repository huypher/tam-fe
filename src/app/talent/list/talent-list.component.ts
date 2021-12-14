import {Component, Input, OnInit} from '@angular/core';
import {TalentService} from "../talent.service";
import {formToTalent, newTalent, Talent} from "../types";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-talent',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.css'],
})
export class TalentListComponent implements OnInit {
  @Input() isPopupTalentModal: boolean = false
  talentData: Talent = newTalent()
  talents: Array<Talent> = []
  validateForm!: FormGroup;
  action: string = ""

  searchItems: Array<string> = ['full_name']

  constructor(private talentService: TalentService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({});
    this.searchItems.forEach(item => {
      this.validateForm.addControl(item, new FormControl())
    })

    this.getTalentList()
  }

  talentModalToggle() {
    this.isPopupTalentModal = !this.isPopupTalentModal
  }

  resetForm() {
    this.validateForm.reset();
  }

  search() {
    console.log(this.validateForm.get('full_name')?.value)
  }

  getTalentList() {
    this.talentService.getTalentList().subscribe(
      resp => {
        this.talents = resp.body?.data.talents || []
      },
      error => {
        console.log("error when get talents")
      })
  }

  popupTalentModal(talent_id?: number) {
    this.talentModalToggle()
    if (talent_id !== undefined) {
      this.action = 'update'
      this.talentData = this.talents.find(t => t.id == talent_id) || newTalent()
      return
    }
    this.action = 'create'
    this.talentData = newTalent()
  }
}

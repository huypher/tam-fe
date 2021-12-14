import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './auth/login/login.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import { LayoutComponent } from './layout/layout.component';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {httpInterceptorProviders} from "./core/services/http/interceptor-provider";
import { TalentListComponent } from './talent/list/talent-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import { TalentNewComponent } from './talent/talent-new/talent-new.component';
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzInputModule} from "ng-zorro-antd/input";

registerLocaleData(en);

let nzCheckBoxModule;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    TalentListComponent,
    TalentNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzMenuModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NzTableModule,
    NzDropDownModule,
    NzTimePickerModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzModalModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

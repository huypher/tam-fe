import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {LayoutComponent} from "./layout/layout.component";
import {AuthenticateGuard} from "./auth/authenticate-guard.guard";
import {TalentListComponent} from "./talent/list/talent-list.component";
import {TalentNewComponent} from "./talent/talent-new/talent-new.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'talent', component: TalentListComponent, canActivate: [AuthenticateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

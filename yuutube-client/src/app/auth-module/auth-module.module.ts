import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizationComponent } from './components/authorization/authorization.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '', component: AuthorizationComponent
  }
];

@NgModule({
  declarations: [AuthorizationComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AuthorizationComponent,
    UserComponent,
    RouterModule,
  ],
})
export class AuthModuleModule { }

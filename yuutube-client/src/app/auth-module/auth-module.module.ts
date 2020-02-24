import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './components/authorization/authorization.component';

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import { AuthorizationService } from './services/auth-service/authorization.service';
import { UserComponent } from './components/user/user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthorizationComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AuthorizationComponent,
    UserComponent
  ],
  providers: [AuthorizationService]
})
export class AuthModuleModule { }

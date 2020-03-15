import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotFound404Component } from './components/not-found404/not-found404.component';
import { HeaderComponent } from './components/header/header.component';
import { SortOptionsComponent } from './components/sort-options/sort-options.component';
import { SortServiceService } from './services/sortService/sort-service.service';
import { RouterModule } from '@angular/router';
import { AuthModuleModule } from '../auth-module/auth-module.module';

@NgModule({
  declarations: [
    NotFound404Component,
    HeaderComponent,
    SortOptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthModuleModule
  ],
  exports: [HeaderComponent],
  providers: [SortServiceService]
})
export class CoreModuleModule { }

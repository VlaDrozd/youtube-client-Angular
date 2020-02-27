import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeModuleModule } from './youtube-module/youtube-module.module';
import { SearchResultsComponent } from './youtube-module/components/search-results/search-results.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { AuthorizationComponent } from './auth-module/components/authorization/authorization.component';
import { NotFound404Component } from './core-module/components/not-found404/not-found404.component';
import { DetailedInformationComponent } from './youtube-module/components/detailed-information/detailed-information.component';
import { GuardGuard } from './core-module/guards/guard.guard';

const routes: Routes = [
  { path: '', component: SearchResultsComponent, canActivate: [GuardGuard] },
  { path: 'auth', component: AuthorizationComponent },
  { path: 'video/:id', component: DetailedInformationComponent, canActivate: [GuardGuard] },
  { path: '**', component: NotFound404Component, canActivate: [GuardGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    YoutubeModuleModule,
    AuthModuleModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeModuleModule } from './youtube-module/youtube-module.module';
import { SearchResultsComponent } from './youtube-module/components/search-results/search-results.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { AuthorizationComponent } from './auth-module/components/authorization/authorization.component';
import { CoreModuleModule } from './core-module/core-module.module';
import { NotFound404Component } from './core-module/components/not-found404/not-found404.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent},
    { path: 'auth', component: AuthorizationComponent},
    { path: '**', component: NotFound404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    YoutubeModuleModule,
    AuthModuleModule,
    CoreModuleModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

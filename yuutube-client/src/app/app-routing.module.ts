import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound404Component } from './core-module/components/not-found404/not-found404.component';
import { GuardGuard } from './core-module/guards/guard.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./youtube-module/youtube-module.module').then(m => m.YoutubeModuleModule), canActivate: [GuardGuard] },
  { path: 'auth', loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule) },
  { path: '**', component: NotFound404Component, canActivate: [GuardGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';

import { ColorByDateDirective } from './directives/color-by-date.directive';
import { SortPipe } from './pipes/sort.pipe';

import { SearchService } from './services/searchService/search.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: 'home', component: SearchResultsComponent},
  { path: 'video/:id', component: DetailedInformationComponent}
];

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    ColorByDateDirective,
    SortPipe,
    DetailedInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [SearchService],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    DetailedInformationComponent,
    RouterModule
  ]
})
export class YoutubeModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ColorByDateDirective } from './directives/color-by-date.directive';
import { SortPipe } from './pipes/sort.pipe';
import { SearchService } from './services/searchService/search.service';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';

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
    RouterModule
  ],
  providers: [SearchService],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    DetailedInformationComponent
  ]
})
export class YoutubeModuleModule { }

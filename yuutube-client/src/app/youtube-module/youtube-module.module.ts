import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ColorByDateDirective } from './directives/color-by-date.directive';
import { SortPipe } from './pipes/sort.pipe';
import { SearchService } from './services/searchService/search.service';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    ColorByDateDirective,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [SearchService],
  exports: [
    SearchItemComponent,
    SearchResultsComponent
  ]
})
export class YoutubeModuleModule { }

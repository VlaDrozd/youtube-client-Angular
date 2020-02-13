import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(values: SearchItem[], type: string): SearchItem[] {
    if (type === 'date') {
      return values.sort((date1: SearchItem, date2: SearchItem) =>
        new Date(date1.snippet.publishedAt).getTime() - new Date(date2.snippet.publishedAt).getTime())
        .reverse();
    }
    if (type === 'views') {
      return values.sort((item1: SearchItem, item2: SearchItem) =>
        +item1.statistics.viewCount - +item2.statistics.viewCount).reverse();
    } else if (type) {
      type = type.toLowerCase().trim();
      return values.filter(
        (item: SearchItem) =>
          !!(item.snippet.tags.join(' ').toLowerCase().indexOf(type) + 1) ||
          !!(item.snippet.title.toLowerCase().indexOf(type) + 1) ||
          !!(item.snippet.description.toLowerCase().indexOf(type) + 1)
      );
    } else {
      return values;
    }
  }

}

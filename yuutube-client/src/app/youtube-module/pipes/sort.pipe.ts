import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../shared-module/models/search-item.model';

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
          item.snippet.tags.join(' ').toLowerCase().includes(type) ||
          item.snippet.title.toLowerCase().includes(type) ||
          item.snippet.description.toLowerCase().includes(type) ||
          item.snippet.channelTitle.toLowerCase().includes(type)
      );
    } else {
      return values;
    }
  }

}

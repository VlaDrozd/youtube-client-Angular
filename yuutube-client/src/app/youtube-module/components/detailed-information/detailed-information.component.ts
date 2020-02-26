import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SearchItem } from 'src/app/shared-module/models/search-item.model';
import { SearchService } from '../../services/searchService/search.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {

  public item: SearchItem;
  public date: Date;

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  public ngOnInit(): void {
    this.item = this.searchService.getByID(this.route.snapshot.params.id);
    this.date = new Date(this.item.snippet.publishedAt);
  }

}

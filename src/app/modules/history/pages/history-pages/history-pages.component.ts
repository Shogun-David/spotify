import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackModel } from '@core/models/track.model';
import { SearchService } from '@modules/history/services/search.service';
import { MessageService } from '@shared/services/message.service';
import { Observable, of } from 'rxjs';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent implements OnInit {

  tracks : Observable<any> = of([]);
  constructor(private searchService: SearchService){}

  ngOnInit(): void{

  }

  search(term: string){
    this.tracks = this.searchService.searchTracks(term);
  
  }
  
}
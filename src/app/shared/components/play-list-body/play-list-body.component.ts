import { Component } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  constructor(private trackService : TracksService) { }
  tracks: Array<TrackModel> = [];
  sortField: string = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  
  ngOnInit(): void {
    const tracks$ = this.trackService.dataTracksBetter$.subscribe(tracks => {
      this.tracks = tracks;
    });
  }

  setSort(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
  }

}

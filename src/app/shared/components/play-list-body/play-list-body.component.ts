import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {

  @Input() tracks: Array<TrackModel> = [];
  optionsSort = {
    property: null as string | null,
    order: 'asc'
  };
  
  
  constructor(private trackService: TracksService) {}

  ngOnInit(): void {
  //  const tracksSubscription = this.trackService.getAllElectronics$().subscribe(tracks => {
  //   this.tracks = tracks;
  //   });
    
  }
  changeSort(property: string): void {
  const { order } = this.optionsSort;
  this.optionsSort = {
    property,
    order: order === 'asc' ? 'desc' : 'asc'
  };
}

}
  

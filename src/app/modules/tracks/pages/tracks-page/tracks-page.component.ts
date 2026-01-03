import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/core/models/track.model';
import { TracksService } from '../../services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  tracksBetter: Array<TrackModel> = [];
  tracksElectronic: Array<TrackModel> = [];

  observerList$ = Array<Subscription>();

  constructor(private tracksService: TracksService) { }
  
  ngOnInit(): void {
    const observerBetter$ = this.tracksService.dataTracksBetter$.subscribe({
      next: (data) => {
        this.tracksBetter = data;
      }
    });

    this.observerList$.push(observerBetter$);

    const observerElectronic$ = this.tracksService.dataTracksElectronic$.subscribe({
      next: (data) => {
        this.tracksElectronic = data;
      },
    });

    this.observerList$.push(observerElectronic$);
  }

  ngOnDestroy(): void {
    this.observerList$.forEach((observer$) => observer$.unsubscribe());
  }
}
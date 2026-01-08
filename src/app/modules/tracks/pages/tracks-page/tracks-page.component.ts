import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from 'src/app/modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
    trackBetter: Array<TrackModel> = [];
    trackElectronic: Array<TrackModel> = [];
    
  
    
    constructor(private tracksService: TracksService) {}
    
  ngOnInit(): void {
    // Primer subscribe
    this.tracksService.getAllTracks$().subscribe((tracks: TrackModel[]) => {
        console.log(tracks);
        this.trackBetter = tracks;
    });

    // Segundo subscribe
    this.tracksService.getAllElectronics$().subscribe((tracks: TrackModel[]) => {
        this.trackElectronic = tracks;
    });
}
    
    
    ngOnDestroy(): void {
       
    }
}
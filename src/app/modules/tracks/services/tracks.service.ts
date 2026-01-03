import { Injectable } from '@angular/core';
import * as dataRow from 'src/app/data/tracks.json'
import { TrackModel } from '@core/models/track.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  dataTracksBetter$: Observable<TrackModel[]> = of([]);
  dataTracksElectronic$: Observable<TrackModel[]> = of([]);

  constructor(){
  const {data}: any = (dataRow as any).default;
  this.dataTracksBetter$ = of(data);
  this.dataTracksElectronic$ = of(data);
    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrackModel } from '@core/models/track.model';
import { OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TracksService {

  constructor(private httpClient: HttpClient) {
    
  }

  getTrack(): TrackModel[]{
    return new Array<TrackModel>();
  }
  
  getAllTracks$() : Observable<TrackModel[]>{
    return this.httpClient.get<TrackModel[]>('http://localhost:3000/api/1.0/tracks');
  }
}

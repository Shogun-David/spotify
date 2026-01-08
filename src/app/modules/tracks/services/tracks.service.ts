import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environments';
import  { map, mergeMap, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class TracksService {

    private readonly URL = environment.api;

    constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    }

    getTrack(): TrackModel[] {
        return new Array<TrackModel>();
    }

   private skipById(tracks: TrackModel[], idToSkip: number): Observable<TrackModel[]> {
        const filteredTracks = tracks.filter(track => track._id !== idToSkip);
        return of(filteredTracks);
    }

    getAllTracks$(): Observable<TrackModel[]> {
        return this.httpClient.get<any>(`${this.URL}/tracks`).pipe(
            map((response) =>{
                return response.data;
            })
           
        );
    }

    getAllElectronics$(): Observable<TrackModel[]> {
        return this.httpClient.get<any>(`${this.URL}/tracks`).pipe(
            mergeMap(({data}) => this.skipById(data, 5))
        );
    }
}
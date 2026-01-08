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
        return this.httpClient.get<any>(`${this.URL}/tracks`, {
            headers: new HttpHeaders({
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Njc4MjMxNTAsImV4cCI6MTc2NzgzMDM1MH0.15_hu-QlK_O3zjEc5orX07VXcME4L-tVOgYry7qkjdA'
          })
        }).pipe(
            map((response) =>{
                return response.data;
            })
           
        );
    }

    getAllElectronics$(): Observable<TrackModel[]> {
        return this.httpClient.get<any>(`${this.URL}/tracks`, {
            headers: new HttpHeaders({
                'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Njc4MjMxNTAsImV4cCI6MTc2NzgzMDM1MH0.15_hu-QlK_O3zjEc5orX07VXcME4L-tVOgYry7qkjdA'
         })
        }).pipe(
            mergeMap(({data}) => this.skipById(data, 5))
        );
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import  { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TracksService {

    private readonly URL = environment.api;

    constructor(private httpClient: HttpClient) {
    }

    getTrack(): TrackModel[] {
        return new Array<TrackModel>();
    }

    getAllTracks$(): Observable<TrackModel[]> {
        return this.httpClient.get<any>(`${this.URL}/tracks`).pipe(
            map((response)=>{
                return response.data;
            })
        );
    }

     getAllElectronic$(): Observable<TrackModel[]> {
        return this.httpClient.get<any>(`${this.URL}/tracks`).pipe(
            map((response)=>{
                return response.data.reverse();

            }),
            map((dataInvertida)=>{
                return dataInvertida.filter((track: TrackModel) =>{
                    return track._id !== 1; // Agrega aquí tu lógica de filtro
                });
            })
        );
    }
}
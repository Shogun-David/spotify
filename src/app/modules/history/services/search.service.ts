import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) { }

  searchTracks(term: string) : Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks?src=${term}`)
    .pipe(
      map((response: any) => response.data)
      
    );
  }
}

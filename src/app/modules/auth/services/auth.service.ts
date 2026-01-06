import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) { }

  sendCredentials(email: string, password: string) : Observable<any> {

    const body = {
        email,
        password
    };

    console.log('Sending credentials', body);

    return this.httpClient.post<any>(`${this.URL}/auth/login`, body).pipe(
        tap(({data}) => {
           // console.log('User logged in:', data);
        })
    );      
  }
}

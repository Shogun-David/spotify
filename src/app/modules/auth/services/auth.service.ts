import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, tap } from 'rxjs';
//import { CookieService } from 'ngx-cookie-service/lib/cookie.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient,
     private cookieService: CookieService) { }

  sendCredentials(email: string, password: string) : Observable<any> {

    const body = {
        email,
        password
    };

    console.log('Sending credentials', body);

    return this.httpClient.post<any>(`${this.URL}/auth/login`, body).pipe(
        tap((data) => {
           console.log('Response data:', data);
           const token = data.tokenSession || data.token || data.accessToken;
           if (token) {
             this.cookieService.set('token', token, 4, '/');
             console.log('Token saved:', token);
           } else {
             console.error('Token not found in response:', data);
           }
        })
    );      
  }
}

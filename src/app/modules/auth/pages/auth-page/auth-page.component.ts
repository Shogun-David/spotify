import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  constructor(private authService: AuthService) {
    console.log('AuthPageComponent initialized');
    authService.sendCretentials('', '');

  }
  sendLogin() {
    this.authService.sendCretentials('jdvasquez@gmail.com', '123456');  
  }
}

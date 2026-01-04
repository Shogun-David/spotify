import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {

  user = {
    email : '',
    password : ''
  } 

  constructor(private authService : AuthService) {
    console.log('AuthPageComponent created');
  }
  
  sendLogin() {
    console.log(this.user);
    this.authService.sendCretentials(this.user.email, this.user.password);  
  }
}

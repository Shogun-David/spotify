import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.css']
})

export class AuthPageComponent implements OnInit {

    formLogin: FormGroup = new FormGroup({});

    constructor(private authService: AuthService) {
    console.log('AuthPageComponent created');
    }

    ngOnInit(): void {
    this.formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
    });
    }

    sendLogin() {
        if (this.formLogin.valid) {
            this.authService.sendCredentials(this.formLogin.value.email, this.formLogin.value.password)
                .subscribe({
                    next:(response) => {
                        console.log('Login successful', response); 
                    },
                    error:(error) => {
                        console.error('Login failed', error);
                    }
                });
        } 
        else {
            console.log('Form is invalid');
        }
    }
}
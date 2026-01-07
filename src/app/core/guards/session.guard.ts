import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';


const checkSession = (): boolean => {
  try{
    const cookieService = inject(CookieService);
    const token = cookieService.check('token');
    return token;
  } catch(error){
    return false;
  }
};


export const sessionGuard: CanActivateFn = (route, state) => {
  const isValidSession = checkSession();
  const router = inject(Router);
  if (!isValidSession) {
    console.warn('No valid session, redirecting to /auth/login');
    router.navigate(['/', 'auth', 'login']);
    return false;
  }

  return true;
};


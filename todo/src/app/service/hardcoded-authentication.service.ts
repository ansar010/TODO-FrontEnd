import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password)
  {
    console.log('before Auth'+this.isUserLoggedIn());
    
    if (username === 'ansar030' && password === 'dummy') {
     sessionStorage.setItem('AuthenticateUser',username);
     console.log('after Auth'+this.isUserLoggedIn());

      return true;
    }
    return false;
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('AuthenticateUser');

    return !(user===null);
  }

  logout()
  {
    sessionStorage.removeItem('AuthenticateUser');
  }
}

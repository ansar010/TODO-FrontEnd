import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'ansar030';
  password = 'dummy';
  errorMessage = 'Invalid login credential';
  invalidLogin = false;

  constructor(private router: Router,
    private hardCodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.hardCodedAuthenticationService.authenticate(this.userName,this.password)) {
      // this.router.navigate(['welcome/' + this.userName]);
      this.router.navigate(['welcome' , this.userName]);

      this.invalidLogin = false ;
    } else {
      this.invalidLogin = true;
    }

  }
}

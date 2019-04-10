import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.userName === 'ansar030' && this.password === 'dummy') {
      // this.router.navigate(['welcome/' + this.userName]);
      this.router.navigate(['welcome' , this.userName]);

      this.invalidLogin = false ;
    } else {
      this.invalidLogin = true;
    }

  }
}

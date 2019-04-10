import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name: String = '';

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    // here params is map and name is key
  this.name = this.activeRouter.snapshot.params['name'];
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userName ='';
  password='';
  wrongCredentials=false;

  ngOnInit(): void {
  }

  login():void {
    this.wrongCredentials = !this.wrongCredentials;
  }
}

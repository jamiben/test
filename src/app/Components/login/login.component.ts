import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/LoginService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = {

        username: '',
        password: '',
    }
    wrongCredentials= false;

    constructor(
        private sessionLogin : LoginService,
        private router: Router
    ) { }


    ngOnInit(): void {
    }

    login():void {
        this.wrongCredentials = false;
        this.sessionLogin.login(this.user.username, this.user.password).subscribe(result => {
            this.router.navigate(['/'])
        }, error => {
            this.wrongCredentials = true;
        })

    }
}

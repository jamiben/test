import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:'root',
})

export class LoginService {
    baseUrl: string = environment.baseUrl;

    LOGIN_URL='/login';
    LOGOUT_URL='/logout';

    constructor(
        private httpClient: HttpClient
    ) {}
    login(pUserName:string, pPassword:string):Observable<boolean>{
        const loginData = {
            userName : pUserName,
            password: pPassword,
        }
        return new Observable<boolean>((observer: Subscriber<boolean>) => {
            this.httpClient.post(environment.baseUrl + this.LOGIN_URL, loginData).subscribe(result => {
                observer.next(true);
                observer.complete();
            }, error => {
                observer.error(false);
                observer.complete();
            });
        });
    }

    logout() {
        return new Observable<boolean>((observer: Subscriber<boolean>) => {
            this.httpClient.get(environment.baseUrl + this.LOGOUT_URL).subscribe(result => {
                observer.next(true);
                observer.complete();
            }, error => {
                observer.error(false),
                observer.complete();
            });
        })
    }
}


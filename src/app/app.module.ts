import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import {HttpXsrfInterceptorService} from './Interceptors/http-xsrf-interceptor/http-xsrf-interceptor.service'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'csrf-token',
        })
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptorService, multi:true}
],
    bootstrap: [AppComponent]
})
export class AppModule { }

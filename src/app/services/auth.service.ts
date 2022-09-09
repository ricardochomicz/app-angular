import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { User } from '../models';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';


const TOKEY_KEY = 'token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    me: any = null
    private baseURL = "http://localhost:8000/api";
    public isLoggedIn = false;

    constructor(private http: HttpClient, private router: Router) {

    }

    login(user: { email: string, password: string }): Observable<boolean> {
        return this.http.post<{ token: string }>('http://localhost:8000/api/login', user)
            .pipe(
                map(response => {
                    localStorage.setItem('access_token', response.token);
                    return true;
                })
            )
    }

    // setToken(token: string) {
    //     window.localStorage.setItem(TOKEY_KEY, token)
    //     //this.setUserFromToken(data);
    // }

    // setUserStorage(user: string) {
    //     window.localStorage.setItem('user', user)
    // }

    // getToken(): string | null {
    //     return localStorage.getItem('access_token');
    // }

    // getUserStorage(): string | null {
    //     return window.localStorage.getItem('user');
    // }

    // isAuth(): boolean {
    //     return !this.getToken();
    // }

    getToken() {
        return localStorage.getItem('access_token');
    }

    logout() {
        let removeToken = localStorage.removeItem('access_token');

        if (removeToken == null) {
            this.router.navigate(['login']);
        }
    }

    //@ts-ignore
    isAuth(): boolean {
        //TODO: Check token expiry and other security checks
        if (localStorage.getItem('access_token'))
            return true;
        //return !!localStorage.getItem('access_token');
    }
}

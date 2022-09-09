import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()


export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header to request

        
        //Get Token data from local storage
        const TOKEN_KEY = this.authService.getToken();

        if (TOKEN_KEY) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${TOKEN_KEY}`,
                }
            });
            
        }

        return newRequest.handle(request);
    }
}

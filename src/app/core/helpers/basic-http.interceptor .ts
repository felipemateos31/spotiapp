import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Injectable({
    providedIn: 'root'
})
export class BasicHttpInterceptor implements HttpInterceptor {

    constructor(
        private spotifyService: SpotifyService
    ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = this.spotifyService.getToken();
        if (req.headers.get('no-auth') === 'true') {
            return next.handle(req);
        }

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

        return next.handle(req);
    }
}

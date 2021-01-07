import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpotifyService } from '../../services/spotify.service';


@Injectable({
    providedIn: 'root'
})
export class ErrorHttpInterceptor implements HttpInterceptor {

    constructor(
        private spotifyService: SpotifyService
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.headers.get('no-catch-on-error') === 'true') {
            return next.handle(request);
        }

        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401) {
                    localStorage.clear();
                    this.spotifyService.getNewToken().subscribe((response: any) => {
                        const token = response.data.access_token;
                        localStorage.setItem('token', token);
                    }, (error: any) => {
                        console.error('Expired token', err.status)
                    });
                }
                const error = err.error.message || err.statusText;
                return throwError(err);
            })
        );
    }


}
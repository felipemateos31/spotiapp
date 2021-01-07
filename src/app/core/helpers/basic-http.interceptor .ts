import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class BasicHttpInterceptor implements HttpInterceptor {

    constructor(
    ) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = 'BQAkia3eIhyjNCeD6y8dpPICRGWBcJbQDvrzbGSdbWJW96ws25m2mn3s9T8X9crbhSjcwE-pWf5XypM7cvahIZOcf3aOUHVqPvZz08ejLHZC1_dW8W_3gfR2UU9mcVoSqSpnXdak41sZPiSTsZ5q7s8ytdTYsrk'
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

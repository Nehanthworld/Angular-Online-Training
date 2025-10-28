import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandlerFn, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from "rxjs";
import { AccountService } from "../components/account/account.service";

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log(req.url);
    console.log(req);
    const router = inject(Router);
    const accountService = inject(AccountService);
    const token = accountService.getToken();
    //start showing loader
    const newReq = req.clone(
        {
            headers: new HttpHeaders({
                'myHeader': 'test',
                'Authorization': 'Bearer ' + token,
                'content-type': 'text/xml',
                //'accept': 'text/xml',
            }),
        }
    )

    return next(newReq).pipe(
        tap(event => {
            if (event.type === HttpEventType.Response && event.redirected) {
                //Hide loader
                console.log(newReq.url, 'returned a response with status', event.status);
            }
            if (event instanceof HttpErrorResponse) {
                //Log the error into db
                console.error('Request sent at ', new Date());
            }
            if (event instanceof HttpResponse && event.status == 200) {
                //Log the success response into db
                console.log('Request success at ', new Date());
            }
        }),
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                // Handle 401 Unauthorized error
                //console.error('401 Unauthorized error:', error);
                // Option 1: Redirect to login page
                router.navigate(['account/login']);
            }
            return throwError(() => error); // Re-throw other errors
        })
    );




























    // const router = inject(Router);
    // const newReq = req.clone({
    //     headers: req.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkFkbWluIiwiU3VwZXJBZG1pbiIsIkNSTSIsIlRlbGVDYWxsZXIiLCJUZXN0IFJvbGUiXSwidW5pcXVlX25hbWUiOiJ2ZW5rYXQiLCJuYW1laWQiOiIyIiwibmJmIjoxNzYxNDkzMTg1LCJleHAiOjE3NjE1MjkxODUsImlhdCI6MTc2MTQ5MzE4NSwiaXNzIjoiRnJpR2F0ZS5Jc3N1ZXIifQ.sRJjOcHT0Xh5k2k0d3bfRbdaSGEjiCBwOmNvLPnT3Rs')
    // })
    // return next(newReq).pipe(tap(event => {
    //     if (event.type === HttpEventType.Response) {
    //         console.log(newReq.url, 'returned a response with status', event.status);
    //     }
    // }),
    //     catchError((error: HttpErrorResponse) => {
    //         if (error.status === 401) {
    //             // Handle 401 Unauthorized error
    //             console.error('401 Unauthorized error:', error);

    //             // Option 1: Redirect to login page
    //             router.navigate(['/login']);

    //             // Option 2: Attempt to refresh token (if applicable)
    //             // this.authService.refreshToken().subscribe(
    //             //   () => {
    //             //     // Retry the original request with the new token
    //             //     const clonedRequest = request.clone({
    //             //       headers: request.headers.set('Authorization', `Bearer ${this.authService.getNewToken()}`)
    //             //     });
    //             //     return next.handle(clonedRequest);
    //             //   },
    //             //   (refreshError) => {
    //             //     console.error('Token refresh failed:', refreshError);
    //             //     this.router.navigate(['/login']); // Redirect if refresh fails
    //             //   }
    //             // );
    //         }
    //         return throwError(() => error); // Re-throw other errors
    //     })
    // );
}

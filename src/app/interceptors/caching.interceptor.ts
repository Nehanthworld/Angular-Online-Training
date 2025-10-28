// caching.interceptor.ts
import { inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHandlerFn } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

export function cachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    const cacheService = inject(CacheService);

    // Only cache GET requests
    if (req.method !== 'GET') {
        return next(req);
    }

    const cachedResponse = cacheService.get(req.urlWithParams);
    if (cachedResponse) {
        // Return cached response immediately
        return of(cachedResponse as HttpResponse<any>);
    }

    // If not cached, make the request and store the response
    return next(req).pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
                cacheService.put(req.urlWithParams, event);
            }
        })
    );
}
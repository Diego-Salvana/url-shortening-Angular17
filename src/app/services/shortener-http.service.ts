import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { ShortenerResponse } from '../interfaces/shortenerResponse.interface';

@Injectable({
   providedIn: 'root',
})
export class ShortenerHttpService {
   private readonly baseUrl = 'https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL?long=';
   private urlList: WritableSignal<ShortenerResponse[]> = signal([]);
   urlListComputed = this.urlList.asReadonly();

   constructor(private http: HttpClient) {}

   getShortUrl(url: string): Observable<ShortenerResponse> {
      const endpoint = `${this.baseUrl}${url}`;

      return this.http.post<ShortenerResponse>(endpoint, {}).pipe(
         tap((data) => {
            this.urlList.update((value) => [data, ...value]);
            sessionStorage.setItem('urlList', JSON.stringify(this.urlListComputed()));
         }),
         catchError((err) => {
            console.error('Error Service:', err);
            throw new Error('An error occurred in the request');
         })
      );
   }

   initializeList(): void {
      const urlList: ShortenerResponse[] = JSON.parse(sessionStorage.getItem('urlList') || '[]');

      if (urlList.length > 0) this.urlList.set(urlList);
   }
}

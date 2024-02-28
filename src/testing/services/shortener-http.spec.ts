import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShortenerHttpService } from '../../app/services/shortener-http.service';
import { ShortenerResponse } from '../../app/interfaces/shortenerResponse.interface';

describe('ShortenerHttp Service', () => {
   let shortenerSvc: ShortenerHttpService;
   let testingController: HttpTestingController;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientModule, HttpClientTestingModule],
      });

      shortenerSvc = TestBed.inject(ShortenerHttpService);
      testingController = TestBed.inject(HttpTestingController);
   });

   afterEach(() => {
      testingController.verify();
   });

   test('should be created', () => {
      expect(shortenerSvc).toBeTruthy();
   });

   test('should add a new shortened url', (done) => {
      const regExp = /^\w{5}$/i;

      shortenerSvc.getShortUrl('http://google.com').subscribe((response) => {
         expect(response.message).toContain('Added!');
         expect(response.short).toMatch(regExp);
         done();
      });
   });

   test('should call with POST method', (done) => {
      const mockResponse: ShortenerResponse = {
         message: 'Added!',
         long: 'https://long-example.com',
         short: 'short-example',
      };

      shortenerSvc.getShortUrl('https://long-example.com').subscribe((response) => {
         expect(response).toEqual(mockResponse);
         done();
      });

      testingController
         .expectOne({
            method: 'POST',
            url: 'https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL?long=https://long-example.com',
         })
         .flush(mockResponse);
   });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortUrlComponent } from '../../app/components/short-url/short-url.component';
import { ShortenerResponse } from '../../app/interfaces/shortenerResponse.interface';

describe('ShortUrlComponent', () => {
   let fixture: ComponentFixture<ShortUrlComponent>;
   let component: ShortUrlComponent;
   let compiled: HTMLElement;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [ShortUrlComponent],
      });

      fixture = TestBed.createComponent(ShortUrlComponent);
      component = fixture.componentInstance;
      compiled = fixture.nativeElement;
   });

   afterAll(() => {
      jest.resetAllMocks();
   });

   test('should create', () => {
      expect(component).toBeTruthy();
   });

   test('should be filled in with the correct data', () => {
      const itemUrlMock: ShortenerResponse = { long: 'https://long-example.com', short: 'short-example' };
      component.itemUrl = itemUrlMock;
      fixture.detectChanges();

      const longUrlElement = compiled.querySelector('.url-details__long');
      const shortUrlElement = compiled.querySelector('.url-details__short span');

      expect(longUrlElement?.textContent).toBe('https://long-example.com');
      expect(shortUrlElement?.textContent).toBe('1pt.co/short-example');
   });

   test('the short url should be copied', () => {
      const btnCopy = compiled.querySelector('.btn-copy') as HTMLElement;

      const spy = jest.spyOn(component, 'copyLink');
      btnCopy.click();

      expect(spy).toHaveBeenCalled();
   });
});

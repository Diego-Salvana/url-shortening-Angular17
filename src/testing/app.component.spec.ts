import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
   let fixture: ComponentFixture<AppComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [AppComponent, HttpClientTestingModule, RouterTestingModule],
      });
      fixture = TestBed.createComponent(AppComponent);
   });

   test('should create the app', () => {
      const app = fixture.componentInstance;

      expect(app).toBeTruthy();
   });

   test('should match the screenshot', () => {
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled).toMatchSnapshot();
   });
});

import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShortenerHttpService } from '../../services/shortener-http.service';
import { httpRegExp } from '../../utils/constants';

@Component({
   selector: 'app-shortener',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [ReactiveFormsModule],
   templateUrl: './shortener.component.html',
   styleUrl: './shortener.component.scss',
})
export class ShortenerComponent {
   shortenerForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(httpRegExp)]],
   });
   @ViewChild('btnSubmit') btnSubmit!: ElementRef<HTMLButtonElement>;

   constructor(private formBuilder: FormBuilder, private shortenerSvc: ShortenerHttpService) {
      this.shortenerSvc.initializeList();
   }

   submitUrl() {
      if (this.shortenerForm.invalid) return;

      const btnSubmitElement = this.btnSubmit.nativeElement;
      const longURL = this.shortenerForm.controls['url'].value || '';

      btnSubmitElement.toggleAttribute('disabled', true);

      this.shortenerSvc.getShortUrl(longURL).subscribe(() => {
         this.shortenerForm.reset();
         btnSubmitElement.toggleAttribute('disabled', false);
      });
   }
}

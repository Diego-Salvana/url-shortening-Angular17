import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ShortenerResponse } from '../../interfaces/shortenerResponse.interface';

@Component({
   selector: 'app-short-url',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
   templateUrl: './short-url.component.html',
   styleUrl: './short-url.component.scss',
})
export class ShortUrlComponent {
   @Input() itemUrl?: ShortenerResponse;
   @ViewChild('btnCopy') btnCopy!: ElementRef<HTMLElement>;

   copyLink(): void {
      const btnCopyElement = this.btnCopy.nativeElement;
      const link = `1pt.co/${this.itemUrl?.short}`;

      navigator.clipboard.writeText(link);

      if (btnCopyElement.classList.contains('copied')) return;

      const copiedElement: HTMLElement | null = document.querySelector('.btn-copy.copied');

      if (copiedElement) {
         copiedElement.classList.remove('copied');
         copiedElement.innerText = 'Copy';
      }

      btnCopyElement.classList.add('copied');
      btnCopyElement.innerText = 'Copied!';
   }
}

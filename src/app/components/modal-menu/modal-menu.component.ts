import {
   ChangeDetectionStrategy,
   Component,
   ElementRef,
   HostListener,
   Signal,
   ViewChild,
   computed,
   effect,
} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ModalService } from '../../services/modal.service';

@Component({
   selector: 'app-modal-menu',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [NavbarComponent],
   providers: [NavbarComponent],
   templateUrl: './modal-menu.component.html',
   styleUrl: './modal-menu.component.scss',
})
export class ModalMenuComponent {
   private showMenu: Signal<boolean>;
   @ViewChild('modalMobile') modalMobile!: ElementRef<HTMLElement>;
   html = document.querySelector('html') as HTMLElement;

   constructor(private modalSvc: ModalService) {
      this.showMenu = computed(() => this.modalSvc.computedModalSignal());

      effect(() => {
         const modalMoblieElement = this.modalMobile.nativeElement;

         if (this.showMenu()) {
            modalMoblieElement.classList.remove('hidden');
            this.html.style.overflowY = 'hidden';
         } else {
            modalMoblieElement.classList.add('hidden');
            this.html.style.overflowY = 'auto';
         }
      });
   }

   @HostListener('document:click', ['$event'])
   handler(event: PointerEvent) {
      const menuElement = this.modalMobile.nativeElement;
      const classHidden = menuElement.classList.contains('hidden');

      if (!menuElement.contains(event.target as Node) && !classHidden) {
         this.modalSvc.toggleSignal();
      }
   }
}

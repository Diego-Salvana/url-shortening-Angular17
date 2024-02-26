import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
   selector: 'app-navbar',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
   templateUrl: './navbar.component.html',
   styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
   constructor(private modalSvc: ModalService) {}

   toggleModalSignal(event: MouseEvent): void {
      event.stopPropagation();
      this.modalSvc.toggleSignal();
   }
}

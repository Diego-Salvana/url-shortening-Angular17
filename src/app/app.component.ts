import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalMenuComponent } from './components/modal-menu/modal-menu.component';

@Component({
   selector: 'app-root',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [HeaderComponent, MainComponent, FooterComponent, ModalMenuComponent],
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss',
})
export class AppComponent {}

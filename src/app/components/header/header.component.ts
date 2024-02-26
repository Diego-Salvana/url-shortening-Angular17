import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
   selector: 'app-header',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [NavbarComponent, RouterModule],
   templateUrl: './header.component.html',
   styleUrl: './header.component.scss',
})
export class HeaderComponent {}

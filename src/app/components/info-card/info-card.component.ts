import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Statistic } from '../../interfaces/statistic.interface';

@Component({
   selector: 'app-info-card',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [],
   templateUrl: './info-card.component.html',
   styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
   @Input() statistic?: Statistic;
}

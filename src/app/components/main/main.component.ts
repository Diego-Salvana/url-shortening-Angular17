import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShortenerComponent } from '../shortener/shortener.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { ShortUrlComponent } from '../short-url/short-url.component';
import { ShortenerHttpService } from '../../services/shortener-http.service';
import { statistics } from '../../utils/constants';
import { Statistic } from '../../interfaces/statistic.interface';

@Component({
   selector: 'app-main',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [ShortenerComponent, InfoCardComponent, ShortUrlComponent, RouterModule],
   templateUrl: './main.component.html',
   styleUrl: './main.component.scss',
})
export class MainComponent {
   shortenedUrlList = computed(() => this.shortenerSvc.urlListComputed());
   statisticsList: Statistic[] = statistics;

   constructor(private shortenerSvc: ShortenerHttpService) {}
}

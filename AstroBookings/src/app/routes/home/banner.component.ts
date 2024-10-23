import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LaunchDto } from '@app/models/launch.dto';
import { LOG_SOURCE, LogService } from '@app/services/log.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: LOG_SOURCE,
    useValue: 'Banner Component'
    },
    LogService  //Ahora al meter este servicio va a hacer un new para este componente y usara la dependencia más cercana en lugar de usar el del appModulo  
  ]
})
export class BannerComponent {
  @Input() nextLaunches: LaunchDto[] = [];

  constructor(private readonly logService: LogService)  
  {
    this.logService.log('loaded');
  }
}

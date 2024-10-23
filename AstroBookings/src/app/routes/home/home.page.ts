import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LaunchDto } from '@app/models/launch.dto';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { LOG_SOURCE, LogService } from '@app/services/log.service';

@Component({
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
      provide: LOG_SOURCE,
      useValue: 'Home Page 🏠'
    },
    LogService  //Ahora al meter este servicio va a hacer un new para este componente y usara la dependencia más cercana en lugar de usar el del appModulo  
  ]
})
export class HomePage {
  nextLaunches$: Observable<LaunchDto[]> = this.homeService.loadNextLaunches$();
  
  constructor(private readonly homeService: HomeService, 
    private readonly logService: LogService
  ) 
  {
    this.logService.log('loaded');
    this.doThings();
  }

  doThings(){
    this.logService.log('Doing things');
  }
}

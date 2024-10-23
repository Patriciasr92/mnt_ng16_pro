import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  LaunchesAbstractRepository,
  LaunchesMemoryRepository,
  LaunchesRestRepository,
} from '@app/services/launches.repository';
import { LOG_SOURCE } from '@app/services/log.service';
import { environment } from 'environments/environment.development';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorModule } from './core/error.module';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, CoreModule, ErrorModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LaunchesAbstractRepository,
      useFactory: launchesRepositoryFactory,
      deps: [HttpClient],
    },
    {
      provide: APP_INITIALIZER, //funcion que debe devolver un observable
      useFactory: initializerFactory,
      deps: [HttpClient],
      multi: true, //esto permite que se ejecuten multiples funciones
    },
    {
      provide: LOG_SOURCE,
      useValue: '🚀 App'
    }
    // {
    //   provide: ErrorHandler,
    //   useClass: CustomErrorHandler,
    //   deps: [LogService]
    // }
  ],
})
export class AppModule {}

function launchesRepositoryFactory(httpClient: HttpClient) {
  if (environment.useRestApi) {
    return new LaunchesRestRepository(httpClient);
  } else {
    return new LaunchesMemoryRepository();
  }
}

function initializerFactory(httpClient: HttpClient): () => Subscription {
  const interna = () => getTime(httpClient);
  return interna;
}

function getTime(httpClient: HttpClient){
  console.log('Hola mundo');
  return httpClient.get('https://worldtimeapiiii.org/api/timezone/Europe/Madrid').subscribe((data)=>{
    console.log(data)
  })
}



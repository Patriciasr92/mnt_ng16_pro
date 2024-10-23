import { ErrorHandler, NgModule } from "@angular/core";
import { LOG_SOURCE, LogService } from "@app/services/log.service";
import { CustomErrorHandler } from "./custom-error.handler";

@NgModule({
    providers: [
        {
            provide: LOG_SOURCE,
            useValue: '🤯 Error Module'
        },
        {
            provide: ErrorHandler,
            useClass: CustomErrorHandler,
            deps: [LogService]
          }
    ]
})

export class ErrorModule{

}
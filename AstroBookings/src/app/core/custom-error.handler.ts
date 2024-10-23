import { ErrorHandler } from "@angular/core";
import { LogService } from "@app/services/log.service";

export class CustomErrorHandler implements ErrorHandler{

    constructor(private readonly logService: LogService){
    }

    handleError(error: any): void {
        this.logService.error('👽 '+ error.message)
    }

}
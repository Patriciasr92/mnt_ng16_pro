import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

// Para inyectar un tipo primitivo (que no este en una clase) hay que generar el token de otra manera
export const LOG_SOURCE = new InjectionToken<string>('LOG_SOURCE');

@Injectable({
  providedIn: 'root'
})
export class LogService {

  // Inyectamos el tipo primitivo
  constructor(@Optional() @Inject(LOG_SOURCE) private source: string) {  //con el Optional te pueden instanciar sin ese valor
    this.source = source || 'unknown'; // Si no tengo valor le pongo unknown por defecto
  }

  log(message: string): void{
    console.log(`[${this.source}] ${message}`)
  }
  
  error(message: string): void{
    console.error(`[${this.source}] ${message}`)
  }

  warn(message: string): void{
    console.warn(`[${this.source}] ${message}`)
  }


}

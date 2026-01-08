import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logHttpError(error: any): void {
    console.error('[LOG] HTTP ERROR',{
      message: error.message,
      status: error.status,
      url: error.url
    });
  }
}

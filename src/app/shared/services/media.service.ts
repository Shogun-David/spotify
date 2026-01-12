import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class MediaService {
	callback: EventEmitter<any> = new EventEmitter<any>();
	observable : Observable<any> = new Observable();
	subject$: Subject<any> = new Subject<any>();
	behaviorSubject$: BehaviorSubject<any> = new BehaviorSubject<any>('vacio');

	constructor() {
		this.observable = new Observable((subscriber) => {
			subscriber.next('Media Service Observable Initialized');
			subscriber.complete();
			subscriber.error('Media Service Observable Error');
		});

		setTimeout(() => {
			this.subject$.next('Media Service Subject Emission after 5 seconds');
		}, 5000);
		
	}
}	

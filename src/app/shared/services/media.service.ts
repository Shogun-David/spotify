import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class MediaService {
	callback: EventEmitter<any> = new EventEmitter<any>();

	constructor() {}
}

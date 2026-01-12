import { Injectable, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class MediaService {
	
	trackInfo$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	public audio!: HTMLAudioElement;

	constructor() {
		console.log('MediaService initialized');
		this.audio = new Audio();
		this.trackInfo$.subscribe(track => {
			if (track) {
				this.setAudio(track);
			}
		});	
		
	}

	private setAudio(track: TrackModel): void {
		this.audio.src = track.url;
		this.audio.play();	
	}

}	

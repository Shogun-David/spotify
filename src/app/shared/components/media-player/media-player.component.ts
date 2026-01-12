import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { MediaService } from 'src/app/shared/services/media.service';
import { TrackModel } from 'src/app/core/models/track.model';
import { Subscription } from 'rxjs';
import { ArtistModel } from '@core/models/artist.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  observerList$: Array<Subscription> = [];
  constructor(public mediaservice: MediaService) {
    console.log('MediaPlayerComponent constructor called');
   }

  ngOnInit(): void {
  
     // this.observerList$.push(observer$);
    }

  ngOnDestroy(): void {
    console.log('MediaPlayerComponent destroyed');
    this.observerList$.forEach(sub => sub.unsubscribe());
  }

    
  }

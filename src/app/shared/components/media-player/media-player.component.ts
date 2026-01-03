import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { MediaService } from 'src/app/shared/services/media.service';
import { TrackModel } from 'src/app/core/models/track.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover = {
    cover: 'https://jeneasispop.com/wp-context/uploads/2019/11/one-love-album-cover.jpg',
    name :'Getting Over',
    album: 'One Love',
    url: 'https://www.example.com',
    _id : 1
  };

  observerList$: Array<Subscription> = [];
  constructor(private mediaservice: MediaService) { }
  ngOnInit(): void {
      const observer$ = this.mediaservice.callback.subscribe((track: TrackModel) => {
        console.log('Received track:', track);
      });
      this.observerList$.push(observer$);
    }

  ngOnDestroy(): void {
    console.log('MediaPlayerComponent destroyed');
    this.observerList$.forEach(sub => sub.unsubscribe());
  }

    
  }

import { Component, OnInit } from '@angular/core';
import { Data, RouterLink } from '@angular/router';
import { DataServiceService } from '@shared/services/data-service.service';
import { MessageService } from '@shared/services/message.service';
import { Observable } from 'rxjs';
import { TracksService } from 'src/app/modules/tracks/services/tracks.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  mainMenu : {
    defaultOptions : Array<any>,
    accesLink: Array<any>

  } = { defaultOptions: [], accesLink: [] };

  customOptions : Array<any> = [];

  currentData$!: Observable<string>;
  currentMessage$!: Observable<string>;

  constructor(private tracksService: TracksService,
    private dataService: DataServiceService,
    private messageService: MessageService
  ) {
    this.currentData$ = this.dataService.currentData;
    this.currentMessage$ = this.messageService.message$;
  }
  

  ngOnInit(){
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']

      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
       name: 'Tu biblioteca',
       icon: 'uil uil-chart',
       router: ['/', 'favorites'],
       query: {hola: 'mundo'}
      }
    ]

    this.mainMenu.accesLink = [
      {
        name: 'Crear lista',
        icon: 'uil uil-plus-square'
      },
      {
        name: 'Canciones que te gusten',
        icon: 'uil-heart-medical'
      }
    ];

    this.customOptions = [
      {
        name : 'Mi lista #1',
        router: ['/']
      },
      {
        name : 'Mi lista #2',
        router: ['/']
      },
      {
        name : 'Mi lista #3',
        router: ['/']
      },
      {
        name : 'Mi lista #4',
        router: ['/']
      }
    ];

    const tracksElectronic$ = this.tracksService.dataTracksElectronic$.subscribe({
      next: (data) => {
        data.forEach(track => {
          this.customOptions.push({
            name: track.name,
            router: ['/', 'tracks', track.id]
          });
        });
      }
    });


  }

}

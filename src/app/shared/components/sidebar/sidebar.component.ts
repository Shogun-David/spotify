import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

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
      icon: 'uil uil-plus-square',
    },
    {
      name: 'Canciones que te gusten',
      icon: 'uil-heart-medical'
    },

  ]

  }

}

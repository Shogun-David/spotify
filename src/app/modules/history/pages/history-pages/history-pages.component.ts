import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent {

  usuario : string = '';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario = this.route.snapshot.paramMap.get('texto') || '';
    console.log(this.usuario);
  }
}

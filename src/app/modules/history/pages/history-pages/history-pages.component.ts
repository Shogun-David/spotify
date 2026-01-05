import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent implements OnInit {

  constructor(private dataService: DataServiceService){}

  ngOnInit(): void{

  }
  
  updateData(){
    this.dataService.updateData('nuevo valor desde history pages');
  }
  
}
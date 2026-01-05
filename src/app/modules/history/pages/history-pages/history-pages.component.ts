import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '@shared/services/message.service';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent implements OnInit {

  constructor(private dataService: DataServiceService, private messageService: MessageService){}

  ngOnInit(): void{

  }
  
  updateData(){
    this.dataService.updateData('nuevo valor desde history pages');
  }

  updateMessage(){
    this.messageService.sendMessage('mensaje desde history pages');
  }
  
}
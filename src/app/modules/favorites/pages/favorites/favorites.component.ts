import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Subscription } from 'rxjs';
import { MessageService } from '@shared/services/message.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  private messageSubscription: Subscription = new Subscription();

  constructor(private dataSerive: DataServiceService, private messageService: MessageService){
    
  }

  ngOnInit(): void{
    this.subscription = this.dataSerive.currentData.subscribe(data => {
      console.log('Data de estado', data);
    });

    this.messageSubscription = this.messageService.messaje$.subscribe(message => {
      console.log('Mensaje recibido:', message);
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
}

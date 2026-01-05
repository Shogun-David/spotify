import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private subscription: Subscription = new Subscription();

  constructor(private dataSerive: DataServiceService){

  }

  ngOnInit(): void{
    this.subscription = this.dataSerive.currentData.subscribe(data => {
      console.log('Data de estado', data);
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}

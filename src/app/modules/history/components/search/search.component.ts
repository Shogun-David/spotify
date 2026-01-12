import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() callbackData : EventEmitter<string> = new EventEmitter<string>();
  src : string = '';

    callSearch(term : string){
        this.callbackData.emit(this.src);
    }
}

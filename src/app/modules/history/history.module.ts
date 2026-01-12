import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPagesComponent } from './pages/history-pages/history-pages.component';
import { SharedModule } from '@shared/shared.module';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [{
  path: '',
  component: HistoryPagesComponent
}];


@NgModule({

  declarations: [
    HistoryPagesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
 
})

export class HistoryModule { }
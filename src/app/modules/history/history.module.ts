import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPagesComponent } from './pages/history-pages/history-pages.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{
  path: '',
  component: HistoryPagesComponent
}];


@NgModule({

  declarations: [
    HistoryPagesComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
 
})

export class HistoryModule { }
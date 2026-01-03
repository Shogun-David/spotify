import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPagesComponent } from './pages/history-pages/history-pages.component';

const routes: Routes = [{
  path: '',
  component: HistoryPagesComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryModule { }

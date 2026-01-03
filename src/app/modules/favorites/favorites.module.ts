import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SharedModule } from "@shared/shared.module";

const routes: Routes = [{
  path: '',
  component: FavoritesComponent
}];

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FavoritesRoutingModule,
    SharedModule
]
})
export class FavoritesModule { }

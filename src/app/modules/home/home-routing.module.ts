import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FavoritesModule } from '../favorites/favorites.module';

const routes: Routes = [ 
  {
    path: 'favorites',
    loadChildren: () => import('src/app/modules/favorites/favorites.module').then(m => m.FavoritesModule) 
  },
  {
    path: 'history',
    loadChildren: () => import('src/app/modules/history/history.module').then(m => m.HistoryModule) 
  },
  {
    path:'tracks',
    loadChildren: () => import('src/app/modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path : '**',
    redirectTo : '/tracks',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

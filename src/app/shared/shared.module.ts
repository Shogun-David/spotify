import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    SectionGenericComponent,
    CardPlayerComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SectionGenericComponent,
    SidebarComponent,
    CardPlayerComponent,
    MediaPlayerComponent,
    FormsModule,
    ReactiveFormsModule,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    SortByPipe
  ]
})
export class SharedModule { }

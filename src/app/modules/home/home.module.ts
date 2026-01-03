import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HijoPageComponent } from './pages/hijo-page/hijo-page.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    HomePageComponent,
    HijoPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule
]
})
export class HomeModule { }

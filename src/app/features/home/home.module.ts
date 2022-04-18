import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// shared
import { SharedModule } from 'src/app/shared/shared.module';

// swiper
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SwiperModule
  ],
})

export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Swiper

// Módulos
import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './features/home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    HeaderModule,
    HomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

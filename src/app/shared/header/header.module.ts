import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
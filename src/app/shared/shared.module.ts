import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CDK
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSliderModule } from '@angular/material/slider';

// Components
import { BtnTryNextOneComponent } from './components/btn/btn-try-next-one/btn-try-next-one.component';
import { BtnUnfollowComponent } from './components/btn/btn-unfollow/btn-unfollow.component';
import { BtnFollowComponent } from './components/btn/btn-follow/btn-follow.component';
import { BtnFollowingUsersComponent } from './components/btn/btn-following-users/btn-following-users.component';
import { CardSuggestionsUsersComponent } from './components/cards/card-suggestions-users/card-suggestions-users.component';
import { CardMainInfoComponent } from './components/cards/card-main-info/card-main-info.component';
import { CardInfoComponent } from './components/cards/card-info/card-info.component';

import { LoadingModule } from './components/loading/loading.module';


const MaterialModules = [
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSliderModule,
]

const BtnComponents = [
  BtnTryNextOneComponent,
  BtnUnfollowComponent,
  BtnFollowComponent,
  BtnFollowingUsersComponent,
]

const CardComponents = [
  CardSuggestionsUsersComponent,
  CardMainInfoComponent,
  CardInfoComponent
]

@NgModule({
  declarations: [
    BtnComponents,
    CardComponents,
  ],
  imports: [
    CommonModule,
    MaterialModules,
    LayoutModule,
    LoadingModule,
    ScrollingModule
  ],
  exports: [
    BtnComponents,
    CardComponents,
    MaterialModules,
    LayoutModule,
    LoadingModule,
    ScrollingModule
  ]
})

export class SharedModule { }

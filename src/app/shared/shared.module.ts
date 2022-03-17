import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

// Components
import { BtnTryNextOneComponent } from './components/btn/btn-try-next-one/btn-try-next-one.component';
import { BtnUnfollowComponent } from './components/btn/btn-unfollow/btn-unfollow.component';
import { BtnFollowComponent } from './components/btn/btn-follow/btn-follow.component';
import { BtnSeeMoreComponent } from './components/btn/btn-see-more/btn-see-more.component';
import { BtnFollowingUsersComponent } from './components/btn/btn-following-users/btn-following-users.component';
import { CardSuggestionsUsersComponent } from './components/cards/card-suggestions-users/card-suggestions-users.component';
import { CardMainInfoComponent } from './components/cards/card-main-info/card-main-info.component';
import { CardPersonalInfoComponent } from './components/cards/card-personal-info/card-personal-info.component';
import { CardContactInfoComponent } from './components/cards/card-contact-info/card-contact-info.component';


@NgModule({
  declarations: [
    BtnTryNextOneComponent,
    BtnUnfollowComponent,
    BtnFollowComponent,
    BtnSeeMoreComponent,
    BtnFollowingUsersComponent,
    CardSuggestionsUsersComponent,
    CardMainInfoComponent,
    CardPersonalInfoComponent,
    CardContactInfoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    BtnTryNextOneComponent,
    BtnUnfollowComponent,
    BtnFollowComponent,
    BtnSeeMoreComponent,
    BtnFollowingUsersComponent,
    CardSuggestionsUsersComponent,
    CardMainInfoComponent,
    CardPersonalInfoComponent,
    CardContactInfoComponent
  ]
})
export class SharedModule { }

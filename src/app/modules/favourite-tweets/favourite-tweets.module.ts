import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteTweetsRoutingModule } from './favourite-tweets-routing.module';

import { FavouriteTweetsComponent } from './favourite-tweets/favourite-tweets.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FavouriteTweetsRoutingModule,
    SharedModule
  ],
  declarations: [FavouriteTweetsComponent]
})
export class FavouriteTweetsModule { }

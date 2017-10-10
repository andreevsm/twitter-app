import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteTweetsRoutingModule } from './favourite-tweets-routing.module';

import { FavouriteTweetsComponent } from './favourite-tweets/favourite-tweets.component';

@NgModule({
  imports: [
    CommonModule,
    FavouriteTweetsRoutingModule
  ],
  declarations: [FavouriteTweetsComponent]
})
export class FavouriteTweetsModule { }

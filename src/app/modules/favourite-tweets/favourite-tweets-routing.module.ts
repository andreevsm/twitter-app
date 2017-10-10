import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavouriteTweetsComponent } from './favourite-tweets/favourite-tweets.component';

const FAVOURITE_TWEETS_ROUTES = [
  {
    path: '',
    component: FavouriteTweetsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(FAVOURITE_TWEETS_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})
export class FavouriteTweetsRoutingModule { }

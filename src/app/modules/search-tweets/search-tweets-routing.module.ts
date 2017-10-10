import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchTweetsComponent } from './search-tweets/search-tweets.component';

const SEARCH_TWEETS_ROUTES = [
  {
    path: 'search-tweets',
    component: SearchTweetsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(SEARCH_TWEETS_ROUTES),
  ],
  exports: [
    RouterModule
  ]
})
export class SearchTweetsRoutingModule { }

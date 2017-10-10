import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTweetsRoutingModule } from './search-tweets-routing.module';

import { SearchTweetsComponent } from './search-tweets/search-tweets.component';

@NgModule({
  imports: [
    CommonModule,
    SearchTweetsRoutingModule
  ],
  declarations: [
    SearchTweetsComponent
  ]
})

export class SearchTweetsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTweetsRoutingModule } from './search-tweets-routing.module';

import { SearchTweetsComponent } from './search-tweets/search-tweets.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SearchTweetsRoutingModule,
    SharedModule
  ],
  declarations: [
    SearchTweetsComponent
  ]
})

export class SearchTweetsModule { }

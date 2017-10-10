import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**
 * components
 */
import { HeaderComponent } from '../layouts/header/header.component';

/**
 * modules
 */
import { FavouriteTweetsModule } from './favourite-tweets/favourite-tweets.module';
import { SearchTweetsModule } from './search-tweets/search-tweets.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FavouriteTweetsModule,
    SearchTweetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

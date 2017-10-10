import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchTweetsModule } from './search-tweets/search-tweets.module';


const routes: Routes = [
  { path: '', redirectTo: 'search-tweets', pathMatch: 'full' },
  // { path: 'search-tweets', component: SearchTweetsModule },
  { path: 'favourite-tweets', loadChildren: './favourite-tweets/favourite-tweets.module#FavouriteTweetsModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

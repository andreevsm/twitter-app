import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tweet, TweetFactory } from '../../../models/tweet.model';
import { FavouriteComponent } from './favourite/favourite.component';

@Component({
  selector: 'app-favourite-tweets',
  templateUrl: './favourite-tweets.component.html',
  styleUrls: ['./favourite-tweets.component.css'],
  providers: [TweetFactory]
})
export class FavouriteTweetsComponent implements OnInit {
  subscription: Subscription;
  favoriteTweets: Tweet[];
  liked: boolean = false;

  constructor(private _tweetFactory: TweetFactory) { }

  ngOnInit() {
    this.getFavouriteTweets();
  }

  private getFavouriteTweets(): void {
    this.subscription = this._tweetFactory.findAllFavouiriteTweets()
      .subscribe(data => {
        this.favoriteTweets = data;
      });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TweetFactory, Tweet } from '../../../models/tweet.model';

@Component({
  selector: 'app-search-tweets',
  templateUrl: './search-tweets.component.html',
  styleUrls: ['./search-tweets.component.css'],
  providers: [TweetFactory]
})
export class SearchTweetsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  searchTweets: Tweet[];

  constructor(private _tweetFactory: TweetFactory) { }

  ngOnInit() {
    this.getSearchTweets();
  }

  private getSearchTweets(): void {
    this.subscription = this._tweetFactory.findAllSearchTweets()
      .subscribe(data => {
        this.searchTweets = data;
      });
  }

  private updateTweet(event): void {
    this._tweetFactory.addFavouriteTweet(event)
    .subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

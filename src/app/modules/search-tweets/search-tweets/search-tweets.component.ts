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
  tweets: Tweet[];
  like: boolean = false;

  constructor(private _tweetFactory: TweetFactory) { }

  ngOnInit() {
    this.getAllTweets();
  }

  private getAllTweets(): void {
    this.subscription = this._tweetFactory.findAllTweets()
      .subscribe(data => {
        this.tweets = data;
        console.log(this.tweets)
      });
  }

  private liked() {
    this.like = !this.like
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

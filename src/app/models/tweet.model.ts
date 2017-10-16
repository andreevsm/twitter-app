import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class Tweet {

    constructor(
        public id: number,
        public text: string,
        public truncated: boolean,
        public retweet_count: number,
        public favourites_count: number
    ) { }
}

@Injectable()
export class TweetFactory {
    constructor(private http: Http) { }

    private searchUrl = 'http://localhost:3000/api/searchTweets';
    private favouriteUrl = 'http://localhost:3000/api/favouriteTweets';

    findAllSearchTweets(): Observable<Tweet[]> {
        return this.http.get(this.searchUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    findAllFavouiriteTweets(): Observable<Tweet[]> {
        return this.http.get(this.favouriteUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addFavouriteTweet(favourite): Observable<Response> {
        return this.http.post('http://localhost:3000/api/favouriteTweet', favourite);
    }
}


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
    ) {}
}

@Injectable()
export class TweetFactory {
    constructor(private http: Http) { }
    
      private tasksUrl = 'http://localhost:3000/api/tweets';
    
      findAllTweets(): Observable<Tweet[]> {
        return this.http.get(this.tasksUrl)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      }
    
      updateStatus(task) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/task/' + task._id, task, {headers: headers})
        .map(res => res.json());
      }
    
}


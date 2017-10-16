import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../../../models/tweet.model';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  @Input() favorite: Tweet;

  constructor() { }

  ngOnInit() {
  }
}

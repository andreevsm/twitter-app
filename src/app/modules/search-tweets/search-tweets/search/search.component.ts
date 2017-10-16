import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() search: any;
  @Output() onUpdate = new EventEmitter();

  liked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private isliked(): void {
    this.liked = !this.liked;
    this.onUpdate.emit(this.search);
  }
}

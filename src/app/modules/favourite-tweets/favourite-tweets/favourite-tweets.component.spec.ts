import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTweetsComponent } from './favourite-tweets.component';

describe('FavouriteTweetsComponent', () => {
  let component: FavouriteTweetsComponent;
  let fixture: ComponentFixture<FavouriteTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

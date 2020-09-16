import { Component, OnInit } from '@angular/core';
import moviesArray from 'src/assets/moviedata';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  cards = this.getCards;

  constructor(data) {
    data.title;

  }

  getCards() {
    moviesArray.map(movie => movie);
  }


  ngOnInit(): void {
  }

}

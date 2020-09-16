import { Component, OnInit } from '@angular/core';
import { IMovie, jawsFilm } from 'src/assets/moviedata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cardData: IMovie = jawsFilm;

  constructor() { }

  ngOnInit(): void {
  }

}

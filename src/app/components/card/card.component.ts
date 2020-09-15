import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title = 'CARDYBOI.';
  lineOne = 'HEYYYYY!';
  lineTwo = 'A-DIDDLE-DEEEDLE-DADDLEEEEEE!'
  image = '../../../assets/images/stanley.jpg'
  altText = 'picture of stanley'
  constructor() { }

  ngOnInit(): void {
  }

}

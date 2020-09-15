import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  logo = 'https://www.logodesign.net/logo/two-film-reels-4185ld.png?size=2&industry=film'
  toggleBurger = this.isOpen ? 'X' : 'O';

  constructor() { }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}

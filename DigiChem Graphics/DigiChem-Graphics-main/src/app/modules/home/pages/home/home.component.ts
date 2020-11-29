import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { faAtom, faFilm, faMap } from '@fortawesome/free-solid-svg-icons';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Props
  faAtom = faAtom;
  isAnimated = '';
  filmIcon = faFilm;
  faMap = faMap;
  capacity;

  currentMenuId = 'menu1';
  windowScrolled: boolean;

  images = [700, 533, 807, 124].map(
    (n) => `https://picsum.photos/id/${n}/1950/600`
  );
  constructor(
    config: NgbCarouselConfig,
    @Inject(DOCUMENT) private document: Document
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
  ngOnInit(): void {}
}

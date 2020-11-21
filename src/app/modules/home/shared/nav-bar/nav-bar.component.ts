import { Component, OnInit } from '@angular/core';
import { faAtom, faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // props
  active = 1;
  faCoffee = faCoffee;
  fabars = faBars;
  faTwitter = faTwitter;
  faAtom = faAtom;
  twitter = faTwitterSquare;
  fb = faFacebookSquare;
  insta = faInstagramSquare;

  constructor() {
    library.add(faTwitter);

  }

  ngOnInit(): void {

  }

  toHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }

  toGallary() {
    document.getElementById('gallary').scrollIntoView({ behavior: 'smooth' });
  }

  toAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }

  toContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

}

import { Component, OnInit } from '@angular/core';
// import { facebook, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faBook, faFilm, faMap, faPhone, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare, faTelegram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  fb = faFacebook;
  twitter = faTwitterSquare;
  insta = faInstagramSquare;
  tele = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}

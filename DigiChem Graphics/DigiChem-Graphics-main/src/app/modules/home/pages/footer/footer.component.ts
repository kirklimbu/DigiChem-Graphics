import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagramSquare, faMailchimp, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  date: Date;
  // copyright:faFacebook;
   fb = faFacebook;
   mail = faMailchimp;
   location = faLocationArrow;
  twitter = faTwitterSquare;
  insta = faInstagramSquare;
  tele = faPhone;
  constructor() { }

  ngOnInit(): void {
    this.date= new Date();
  }


}

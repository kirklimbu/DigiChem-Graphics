import * as olProj from 'ol/proj';

import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Geo } from '../model/geo.model';
import Icon from 'ol/style/Icon';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';

// test



// import Map from 'ol/Map';

// Third-party



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  latitude: number = 28.3949; // ktm: 27.700769 , 85.300140
  longitude: number = 84.1240;
  ol: any;
  map: Map;

  geo: Geo;
  geolocation;

  constructor() {
  }

  // ngOnInit() {
  //   this.geo = new Geo();
  //   this.geolocation = navigator.geolocation;
  // }

  // ngAfterViewInit() {
  //   this.geo.map.updateSize();
  // }

  // locate() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.geo.setView(10, [position.coords.longitude, position.coords.latitude]);
  //     });
  //   }
  // }

  // test2
  ngOnInit() {

    this.initMap();
  }

  initMap() {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        // center:[0,0],
        center: olProj.fromLonLat([75.700769, 35.300140]),
        zoom: 2
      })
    });
  }
}


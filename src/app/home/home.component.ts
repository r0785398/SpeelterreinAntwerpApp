import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Feature } from '../Interfaces/ispeelterrein';
import { SpeelterreinService } from '../Services/speelterrein.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public speelterreinen: Feature[] = [];

  //Tutorial: https://medium.com/angular-in-depth/google-maps-is-now-an-angular-component-821ec61d2a0

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    mapTypeId: 'hybrid',
    maxZoom: 20,
    minZoom: 8,
  };
  markers = [];
  infoContent = '';

  constructor(private _speelterrein: SpeelterreinService) {}

  ngOnInit() {
    this._speelterrein
      .getAllSpeeltereinen()
      .subscribe((data) =>
        this.addMarker((this.speelterreinen = data.features))
      );

    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    // });
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker(speelterreinen: Feature[]) {
    for (let index = 0; index < speelterreinen.length; index++) {
      const item = speelterreinen[index];

      console.log(item);

      this.markers.push({
        position: {
          lat: item.geometry.y,
          lng: item.geometry.x,
        },

        ////Met de labels aan wordt de map te druk!
        // label: {
        //   frontSize: '18px',
        //   color: 'white',
        //   text: item.attributes.naam,
        // },
        title: item.attributes.naam,
        options: { animation: google.maps.Animation.DROP },
      });

      if (index === 0) {
        this.center = {
          lat: item.geometry.y,
          lng: item.geometry.x,
        };
      }
    }
  }

  
  openInfo(marker: MapMarker, content) {
    console.log(marker);
    this.infoContent = content;
    this.info.open(marker);
  }
}

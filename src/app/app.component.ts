import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import { } from '@types/googlemaps';
import '../assets/markerClustere/markerclusterer.js';
import { AppendixAService } from './shared/services/appendix-a.service';

declare var MarkerClusterer: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('gmap') public mapEl: ElementRef;
  public locationLat: number;
  public locationLng: number;
  public locationList: any;
  public countriesLocations: any;
  mapsAPILoader: any;
  private marker: any;
  private map: any;
  private mapMarkers: any;

  constructor(private appendixAService: AppendixAService) { }

  ngOnInit() {
    this.mapMarkers = [];
    this.locationLat = 0;
    this.locationLng = 0;
    this.getJsonAppendixA();
    this.countriesLocations = [
      { 'name': 'Australia', 'lat': -25.274398, 'lng': 133.775136 },
      { 'name': 'Israel', 'lat': 31.046051, 'lng': 34.851612 },
      { 'name': 'Usa', 'lat': 39.7392358, 'lng': -100.712891 },
      { 'name': 'France', 'lat': 46.227638, 'lng': 2.213749 },
      { 'name': 'Japan', 'lat': 36.204824, 'lng': 138.252924 }
    ];
  }

  markers() {
    // this.infowindow = new google.maps.InfoWindow();
    this.map = new google.maps.Map((this.mapEl.nativeElement), {
      zoom: 10,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    for (let i = 0; i < this.locationList.length; i++) {
      this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.locationList[i].location.latitude, this.locationList[i].location.longitude),
        map: this.map
      });
      this.mapMarkers.push(this.marker);
    }

    this.clusterMap();
  }

  countryLocation(country: any) {
    this.map.setCenter(new google.maps.LatLng(country.lat, country.lng));
  }
  clusterMap() {
    const markerCluster = new MarkerClusterer(this.map, this.mapMarkers,
      { imagePath: './assets/images/m' });
  }

  clickedCountry(country) {
    this.locationLat = country.lat;
    this.locationLng = country.lng;
  }

  getJsonAppendixA() {
    this.appendixAService.getLocationList().subscribe(data => {
      this.locationList = data;
      this.markers();
    });
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countries: any;
  @Output() notifyCountry: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.countries = [
      { 'name': 'Australia', 'lat': -25.274398, 'lng': 133.775136 },
      { 'name': 'Israel', 'lat': 31.046051, 'lng': 34.851612 },
      { 'name': 'Usa', 'lat': 39.7392358, 'lng': -100.712891 },
      { 'name': 'France', 'lat': 46.227638, 'lng': 2.213749 },
      { 'name': 'Japan', 'lat': 36.204824, 'lng': 138.252924 }

    ];
  }

  chosenCountry(country) {
    this.notifyCountry.emit(country);
  }
}

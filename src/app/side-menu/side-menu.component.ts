import { Component, OnInit } from '@angular/core';
import { AppendixAService } from '../shared/services/appendix-a.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

    public locationsArr: any;
    public distanceArr: any;
    public order: string;

    constructor(private appendixAService: AppendixAService, private orderPipe: OrderPipe) {
    }

    ngOnInit() {
        this.distanceArr = [];
        this.getJsonAppendixA();
        this.order = 'distance';
    }

    getJsonAppendixA() {
        this.appendixAService.getLocationList().subscribe(data => {
            this.locationsArr = data;
            this.locationsArr.forEach(userLocation => {
                let lat = userLocation.location.latitude;
                let lng = userLocation.location.longitude;
                lat = Number(lat);
                lng = Number(lng);
                const centerMapLat = 0;
                const centerMapLng = 0;
                const distance = this.calculteDistance(lat, lng, centerMapLat, centerMapLng);
                userLocation.distance = distance;  // order by distance
            });
        });
    }

    calculteDistance(lat1, lon1, lat2, lon2) {
        const radlat1 = Math.PI * lat1 / 180;
        const radlat2 = Math.PI * lat2 / 180;
        const theta = lon1 - lon2;
        const radtheta = Math.PI * theta / 180;
        let d = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        d = Math.acos(d);
        d = d * 180 / Math.PI;
        d = d * 60 * 1.1515;
        d = d * 1.609344;
        return d;
    }


}

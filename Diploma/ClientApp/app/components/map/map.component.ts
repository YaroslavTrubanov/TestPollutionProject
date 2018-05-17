import { Component, OnInit, ViewChild } from '@angular/core';
import { NguiMapModule } from '@ngui/map';
import { MapService } from '../../services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  providers: [MapService],
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  positions: any[] = [];
  centerGeoPoint: string;
  selectedMarker: any;

  constructor(private mapService: MapService) {
    this.mapService = mapService;


    this.centerGeoPoint = "54.70916675, 20.5206741";
    this.selectedMarker = {
      display: true,
      lat: 123,
      lng: 25
    }
  }
  ngOnInit(): void {
    // Usage Example.
    // Generates 40 points that is in a 4km radius from the given lat and lng point.
    this.positions = this.mapService.generateRandomPoints({ 'lat': 54.70916675, 'lng': 20.5206741 }, 5 * 1000, 40);
  }
  onMapReady(map: google.maps.Map) {
    console.log('map', map);
    // console.log('markers', map.markers);  // to get all markers as an array 
  }
  onIdle(event: any) {
    console.log('map', event.target);
  }
  onMarkerInit(marker: google.maps.Marker) {
    console.log('marker', marker);
  }
  onMapClick(event: any) {
    //this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
  }
}

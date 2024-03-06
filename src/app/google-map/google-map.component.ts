import { Component } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {

  lat: number = 0;
  lng: number = 0;
  dmsLat: string = '';
  dmsLng: string = '';

  convertToDMS(): void {
    this.dmsLat = this.convertDecimalToDMS(this.lat, 'lat');
    this.dmsLng = this.convertDecimalToDMS(this.lng, 'lng');
  }

  private convertDecimalToDMS(decimal: number, type: string): string {
    const absolute = Math.abs(decimal);
    const degrees = Math.floor(absolute);
    const minutes = Math.floor((absolute - degrees) * 60);
    const seconds = (absolute - degrees - minutes / 60) * 3600;
    const direction = decimal >= 0 ? (type === 'lat' ? 'N' : 'E') : (type === 'lat' ? 'S' : 'W');

    return `${degrees}° ${minutes}' ${seconds.toFixed(2)}" ${direction}`;
  }
}

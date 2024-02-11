import { Component,OnInit } from '@angular/core';
// import { LocationService } from './location.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-proximity',
  templateUrl: './proximity.component.html',
  styleUrls: ['./proximity.component.css']
})
export class ProximityComponent {
  // targetLocation = { latitude: TARGET_LATITUDE, longitude: TARGET_LONGITUDE };

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.userLocation$.subscribe((userLocation) => {
      // const distance = this.calculateDistance(userLocation, this.targetLocation);

      // Set a threshold distance (e.g., 100 meters)
      // if (distance <= 100) {
      //   // Send notification or perform any other action
      //   this.sendNotification('You are near the target location!');
      // }
    });
  }

  calculateDistance(location1: any, location2: { latitude: any; longitude: any; }) {
    // Implement a function to calculate the distance between two GPS coordinates
    // You can use Haversine formula or other distance calculation methods
    // Return the distance in meters
  }

  sendNotification(message: string) {
    // Implement code to send a notification
    // This could be a custom alert or a notification service
    alert(message);
  }
}

import { Component } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  title = 'user-location-angular';
  location:any;
  locationJs: any;
  constructor(private commonService:LocationService){

  }

  ngOnInit(){
    this.commonService.getLocation().subscribe((response)=>{
      console.log(response);
      this.location = response;
    })

    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
      this.locationJs = position.coords;
    })
  }
}

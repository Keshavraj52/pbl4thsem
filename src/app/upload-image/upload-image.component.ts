import { Component } from '@angular/core';
import { LocationService } from '../location.service';
import { product } from '../datatype';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  addProductMessage:string|undefined;
  title = 'user-location-angular';
  location:any;
  locationJs: any;
  selectedFile: File | null = null;
  fileLocation: string | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  constructor(private product:LocationService){

  }
  submit(data:product){
    this.product.addproduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMessage="image is successfully added"
      }
      setTimeout(() => (this.addProductMessage=undefined),3000 );

    })
  }
  ngOnInit(){
    this.product.getLocation().subscribe((response)=>{
      console.log(response);
      this.location = response;
    })

    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position);
      this.locationJs = position.coords;
    })
  }
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];

      // Get file location using Geolocation API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.fileLocation = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );

      // Display selected image preview
      const reader = new FileReader();
      
      reader.readAsDataURL(this.selectedFile);
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { product } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = 'http://localhost:3000/images';

  constructor(private http: HttpClient) {}

  uploadImage(formData: FormData): Observable<ImageData> {
    return this.http.post<ImageData>(this.apiUrl, formData);
  }
  addproduct(data:product){
    return this.http.post('http://localhost:3000/photo',data)
   }
  getLocation(){
    return this.http.get('https://ipapi.co/json/');
  }
}

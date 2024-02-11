import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private userLocationSubject = new Subject<any>();
  userLocation$ = this.userLocationSubject.asObservable();

  setUserLocation(location: any) {
    this.userLocationSubject.next(location);
  }
}

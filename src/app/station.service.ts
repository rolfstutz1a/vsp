import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Station } from './station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private stationSource = new BehaviorSubject(Station.createInitialStation());
  currentStation = this.stationSource.asObservable();

  constructor() { }

  changeStation(station: Station) {
    this.stationSource.next(station);
  }
}

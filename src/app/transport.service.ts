import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TransportService {

  constructor(private http: HttpClient) {
  }

  createStationUrl(term) {
      return 'https://transport.opendata.ch/v1/locations?query=' + term + '&type=station';
  }

  searchStation(term) {
      return this.http.get(this.createStationUrl(term));
  }

}

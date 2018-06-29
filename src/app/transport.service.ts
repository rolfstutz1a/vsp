import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TransportService {

  static readonly NUMBER_OF_CONNECTIONS: String = '10';

  constructor(private http: HttpClient) {
  }

  private createStationUrl(term) {
    return 'https://transport.opendata.ch/v1/locations?query=' + term + '&type=station';
  }

  private createConnectionUrl(id) {
    return 'https://transport.opendata.ch/v1/stationboard?id=' + id + '&limit=' + TransportService.NUMBER_OF_CONNECTIONS;
  }

  searchStation(term) {
    return this.http.get(this.createStationUrl(term));
  }

  searchConnections(id) {
    return this.http.get(this.createConnectionUrl(id));
  }
}

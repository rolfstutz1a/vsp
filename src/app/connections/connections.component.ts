import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'vsp-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit  {

  station: Station = Station.createInitialStation();

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.currentStation.subscribe(station => this.station = station);
  }
}

import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'vsp-selected-station',
  templateUrl: './selected-station.component.html',
  styleUrls: ['./selected-station.component.css']
})
export class SelectedStationComponent implements OnInit {

  station: Station = Station.createInitialStation();

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.currentStation.subscribe(station => this.station = station);
  }
}

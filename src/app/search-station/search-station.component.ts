import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TransportService } from '../transport.service';
import { StationService } from '../station.service';
import { Station } from '../station';

@Component({
  selector: 'vsp-search-station',
  templateUrl: './search-station.component.html',
  styleUrls: ['./search-station.component.css']
})
export class SearchStationComponent implements OnInit {

  searchStations: FormControl = new FormControl();
  selectedStation: Station = Station.createInitialStation();
  searchResult: any = [];

  constructor(private transportService: TransportService, private stationService: StationService) {
    this.searchStations.valueChanges
      .subscribe(data => {
        if (typeof data === 'string') {
          this.transportService.searchStation(data).subscribe(response => {
            this.searchResult = response['stations'].map(item => new Station(item.id, item.name));
          });
        } else {
          this.searchResult = [];
        }
      });
  }

  ngOnInit() { }

  onSelectStation(station: Station) {
    this.selectedStation = station;
    this.stationService.changeStation(station);
  }
}

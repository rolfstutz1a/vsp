import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { Connection } from '../connection';
import { TransportService } from '../transport.service';
import { StationService } from '../station.service';

@Component({
  selector: 'vsp-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  station: Station = Station.createInitialStation();
  connections: any = [];
  active = true;

  constructor(private transportService: TransportService, private stationService: StationService) { }

  ngOnInit() {
    this.stationService.currentStation.subscribe(station => { this.changeStation(station); });
    // setInterval(this.refresh, 30000);

    setInterval(() => {
      if (this.active === true) {
        this.refresh();
      }
    }, 25000);
  }

  private changeStation(station: Station) {
    this.station = station;
    this.refresh();
  }

  private refresh() {
    this.transportService.searchConnections(this.station.id).subscribe(response => {
      this.connections = response['stationboard'].map(item => new Connection(item));
    });
  }
}
